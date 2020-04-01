import React, { Fragment } from "react";
import Head from "next/head";

import Page from "../components/pages/sign-up";
import WithAuthentication from "../lib/with-authentication";

const IndexPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Sign Up Page</title>
      </Head>
      <Page />
    </Fragment>
  );
};

export default WithAuthentication(IndexPage);
