import React from "react";
import Head from "next/head";
import Page from "components/pages/feeds";
import { NextPage } from "next";
import Loader from "components/loader";
import { useSession } from "next-auth/client";
import WithGraphQL from "lib/with-graphql";

const FeedsPage: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader />;
  }

  return (
    <WithGraphQL userId={session ? session.id : ""}>
      <Head>
        <title>Feeds Page</title>
      </Head>
      <Page />
    </WithGraphQL>
  );
};

export default FeedsPage;
