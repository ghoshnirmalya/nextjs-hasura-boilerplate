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
  const userIdInString = session.id.toString();

  const subscriptionClient = new SubscriptionClient(
    process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080/v1/graphql",
    {
      reconnect: true,
      connectionParams: {
        headers: { "X-Hasura-User-Id": userIdInString },
      },
    },
    ws
  );

  const client = new Client({
    url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/v1/graphql",
    fetch,
    fetchOptions: {
      headers: { "X-Hasura-User-Id": userIdInString },
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
