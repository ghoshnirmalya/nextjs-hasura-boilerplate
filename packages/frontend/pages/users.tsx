import React from "react";
import Head from "next/head";
import Page from "components/pages/users";
import { withUrqlClient } from "next-urql";
import { defaultExchanges, subscriptionExchange } from "urql";
import fetch from "isomorphic-unfetch";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "isomorphic-ws";
import { NextPage } from "next";
import Loader from "components/loader";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { useSession } from "next-auth/client";

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

const IndexPage: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader />;
  }

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withUrqlClient(
  () => ({
    url: process.env.API_URL || "http://localhost:8080/v1/graphql",
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
    fetchOptions: () => {
      return {
        headers: { "X-Hasura-Admin-Secret": "secret" },
      };
    },
    requestPolicy: "cache-and-network",
  }),
  { ssr: true }
)(IndexPage);
