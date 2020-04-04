// @ts-nocheck

import { ApolloClient } from "apollo-boost";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { cookieParser } from "lib/cookie";

if (!process.browser) {
  global.fetch = fetch;
}

const httpApiUrl = process.env.API_URL || "";
const wsApiUrl = process.env.WS_URL || "";
const token = cookieParser("token");
const userId = cookieParser("user-id");
const userRoles = cookieParser("user-roles");
const headers = {
  "X-Hasura-API-Token": `Bearer ${token}`,
  "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET,
  "X-Hasura-User-ID": userId,
  "X-Hasura-User-Roles": [userRoles],
};

function create() {
  const token = cookieParser("token");

  const httpLink = new HttpLink({
    uri: httpApiUrl,
    credentials: "include",
    headers,
  });

  const wsLink = process.browser
    ? new WebSocketLink({
        uri: wsApiUrl,
        options: {
          reconnect: true,
          connectionParams: {
            headers,
          },
        },
      })
    : null;

  const link = process.browser
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);

          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link,
    cache: new InMemoryCache().restore({}),
  });
}

export default function initApollo() {
  let apolloClient;

  if (!process.browser) {
    return create();
  }

  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}
