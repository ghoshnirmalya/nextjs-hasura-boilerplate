import React from "react";
import Head from "next/head";
import Page from "components/pages/index";
import withAuthentication from "lib/with-authentication";
import withApollo from "lib/with-apollo";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withApollo(withAuthentication(IndexPage));
