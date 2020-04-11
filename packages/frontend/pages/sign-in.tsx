import React from "react";
import Head from "next/head";
import Page from "components/pages/sign-in";
import WithAuthentication from "lib/with-authentication";

const SignInPage = () => {
  return (
    <>
      <Head>
        <title>Sign In Page</title>
      </Head>
      <Page />
    </>
  );
};

export default WithAuthentication(SignInPage);
