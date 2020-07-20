import React from "react";
import Head from "next/head";
import Page from "components/pages/subscription";
import { NextPage } from "next";
import Loader from "components/loader";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { useSession } from "next-auth/client";
import WithGraphQLSubscription from "lib/with-graphql-subscription";

const SubscriptionPage: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader />;
  }

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <WithGraphQLSubscription>
      <Head>
        <title>Users Page</title>
      </Head>
      <Page />
    </WithGraphQLSubscription>
  );
};

export default SubscriptionPage;
