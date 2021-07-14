import { ApolloClient, HttpLink, split } from "@apollo/client";
import { InMemoryCache, NormalizedCacheObject } from "@apollo/client/cache";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import fetch from "isomorphic-unfetch";
import ws from "isomorphic-ws";
import React from "react";
import { SubscriptionClient } from "subscriptions-transport-ws";

const createHttpLink = (token: string) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/v1/graphql",
    credentials: "include",
    headers: { Authorization: `Bearer ${token}` },
    fetch,
  });
  return httpLink;
};

const createWSLink = (token: string) => {
  return new WebSocketLink(
    new SubscriptionClient(
      process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080/v1/graphql",
      {
        lazy: true,
        reconnect: true,
        connectionParams: async () => {
          return {
            headers: { Authorization: `Bearer ${token}` },
          };
        },
      },
      ws
    )
  );
};

let apolloClient: ApolloClient<NormalizedCacheObject>;

export const createApolloClient = (token: string) => {
  const ssrMode = typeof window === "undefined";

  const link = !ssrMode
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        createWSLink(token),
        createHttpLink(token)
      )
    : createHttpLink(token);

  return new ApolloClient({ ssrMode, link, cache: new InMemoryCache() });
};

export const initializeApollo = (initialState = {}, token: string) => {
  const _apolloClient = apolloClient ?? createApolloClient(token);

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }
  if (typeof window === "undefined") {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export function useApollo(initialState: any, token: string) {
  const store = React.useMemo(
    () => initializeApollo(initialState, token),
    [initialState, token]
  );
  return store;
}
