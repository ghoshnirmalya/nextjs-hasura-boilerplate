import fetch from "isomorphic-unfetch";
import { Client, defaultExchanges, subscriptionExchange, Provider } from "urql";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "isomorphic-ws";
import { ReactNode } from "react";
import session from "types/session";

const WithGraphQL = ({
  session,
  children,
}: {
  session: session;
  children: ReactNode;
}) => {
  const token = `Bearer ${session.token}`;

  const subscriptionClient = new SubscriptionClient(
    process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080/v1/graphql",
    {
      reconnect: true,
      connectionParams: {
        headers: { Authorization: token },
      },
    },
    ws
  );

  const client = new Client({
    url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/v1/graphql",
    fetch,
    fetchOptions: {
      headers: { Authorization: token },
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

  return <Provider value={client}>{children}</Provider>;
};

export default WithGraphQL;
