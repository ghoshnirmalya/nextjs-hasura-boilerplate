import { ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const httpApiUrl = process.env.API_URL
const wsApiUrl = process.env.WS_URL

function create({ token, ...rest }) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  // Create an http link
  const httpLink = new HttpLink({
    uri: httpApiUrl, // Server URL (must be absolute)
    credentials: 'include', // Additional fetch() options like `credentials` or `headers`
    headers: {
      Authorization: `Bearer ${token}`,
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
    },
  })
  const wsLink = process.browser
    ? new WebSocketLink({
        // if you instantiate in the server, the error will be thrown
        uri: wsApiUrl,
        options: {
          reconnect: true,
          connectionParams: {
            headers: {
              Authorization: `Bearer ${token}`,
              'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
            },
          },
        },
        headers: {
          Authorization: `Bearer ${token}`,
          'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET,
        },
      })
    : null

  const link = process.browser
    ? split(
        // only create the split in the browser
        // split based on operation type
        ({ query }) => {
          const { kind, operation } = getMainDefinition(query)
          return kind === 'OperationDefinition' && operation === 'subscription'
        },
        wsLink,
        httpLink
      )
    : httpLink

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link,
    cache: new InMemoryCache().restore(rest || {}),
  })
}

export default function initApollo({ token, ...rest }) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create({ token, ...rest })
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create({ token, ...rest })
  }

  return apolloClient
}
