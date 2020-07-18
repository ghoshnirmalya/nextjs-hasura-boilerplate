import React from "react";
import Head from "next/head";
import Page from "components/pages/subscription";
import { withUrqlClient } from "next-urql";
import { NextPage } from "next";
import Loader from "components/loader";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { useSession } from "next-auth/client";
import graphqlSubscriptionConfig from "configs/graphql-subscription";

const SubscriptionPage: NextPage = () => {
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
        <title>Users Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withUrqlClient(graphqlSubscriptionConfig)(SubscriptionPage);
