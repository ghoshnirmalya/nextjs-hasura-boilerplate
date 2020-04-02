import React, { Fragment } from "react";
import Head from "next/head";

import Page from "../components/pages/index";
import WithAuthentication from "../lib/with-authentication";

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

export default WithAuthentication(IndexPage);
