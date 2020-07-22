import fetch from "isomorphic-unfetch";
import { Client, defaultExchanges, subscriptionExchange, Provider } from "urql";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "isomorphic-ws";

const subscriptionClient = new SubscriptionClient(
  process.env.WS_URL || "ws://localhost:8080/v1/graphql",
  {
    reconnect: true,
    connectionParams: {
      headers: { "X-Hasura-Admin-Secret": "secret" },
    },
  },
  ws
);

const client = new Client({
  url: process.env.API_URL || "http://localhost:8080/v1/graphql",
  fetch,
  fetchOptions: {
    headers: { "X-Hasura-Admin-Secret": "secret" },
  },
  requestPolicy: "cache-and-network",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        return subscriptionClient.request(operation);
      },
    }),
  ],
});

const WithGraphQL = ({ children }: any) => (
  <Provider value={client}>{children}</Provider>
);

export default WithGraphQL;
