import { defaultExchanges, subscriptionExchange } from "urql";
import subscriptionClient from "lib/graphql-subscription-client";

const graphqlSubscriptionConfig = () => ({
  url: process.env.WS_URL || "ws://localhost:8080/v1/graphql",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        return subscriptionClient.request(operation);
      },
    }),
  ],
  fetch,
  suspense: true,
});

export default graphqlSubscriptionConfig;
