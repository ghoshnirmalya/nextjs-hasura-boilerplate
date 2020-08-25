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
  const userIdInString =
    "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUwMzFjMWNiLTZiNDItNDM3MS04NjYyLTA2MTNjOGIxM2Y2ZCIsIm5hbWUiOiJOaXJtYWx5YSBHaG9zaCIsImVtYWlsIjoibmlybWFseWEuZ2hvc2hAYW90LmVkdS5pbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHakVmTGVJMWU5TVUwN0oxX0NQY0lWZTB1M2dUZFBiTDMwbGx0VHAiLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiI1MDMxYzFjYi02YjQyLTQzNzEtODY2Mi0wNjEzYzhiMTNmNmQifSwiaWF0IjoxNTk4MzQzMjAzLjE3MiwiZXhwIjoxNTk4NDI5NjAzLCJzdWIiOiI1MDMxYzFjYi02YjQyLTQzNzEtODY2Mi0wNjEzYzhiMTNmNmQifQ.v4U72YmlDDpYQ6J9bpTtdwHGI8mvRMIcvRl1SmlIPDQ22CXB4iUw_ENut0xLdnYyWCzV91QjQTZtkpxfoTEWs3kxsVvxeZLYMpvlnd61WVA0dVOOVbgtWHXpGVkHBlRITiw4TVGlDpbxFcaeM2dUV2kCF52BI45gxnPF40BCHKKe3MvhdQbYunQP_dCn65Zb6efKyjLri_BQw7hcBjSCrkAokWg8219KH3VfrNl-E6HVFADhq3P2aVUzSCoEKKpNvEyo81jUTpF-3avpffiJN-LDuy_nTdJmxMUoV4CjQbBfJdneFYVKKazKuS0XFzL2ZJ6ODZsK-p4IeGgiBhoy9A";

  const subscriptionClient = new SubscriptionClient(
    process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080/v1/graphql",
    {
      reconnect: true,
      connectionParams: {
        headers: { Authorization: userIdInString },
      },
    },
    ws
  );

  const client = new Client({
    url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/v1/graphql",
    fetch,
    fetchOptions: {
      headers: { Authorization: userIdInString },
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
