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

export default subscriptionClient;
