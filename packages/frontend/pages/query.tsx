import React from "react";
import Head from "next/head";
import Page from "components/pages/query";
import { withUrqlClient } from "next-urql";
import { NextPage } from "next";
import Loader from "components/loader";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { useSession } from "next-auth/client";
import graphqlQueryConfig from "configs/graphql-query";

const QueryPage: NextPage = () => {
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
        <title>People Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withUrqlClient(graphqlQueryConfig)(QueryPage);
