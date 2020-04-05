import React from "react";
import Head from "next/head";
import Page from "components/pages/sign-up";
import WithAuthentication from "lib/with-authentication";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up Page</title>
      </Head>
      <Page />
    </>
  );
};

export default WithAuthentication(IndexPage);
