import React, { Fragment } from "react";
import Head from "next/head";
import Page from "components/pages/index";
import WithAuthentication from "lib/with-authentication";
import withApollo from "lib/with-apollo";

const IndexPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Index Page</title>
      </Head>
      <Page />
    </Fragment>
  );
};

export default withApollo(WithAuthentication(IndexPage));
