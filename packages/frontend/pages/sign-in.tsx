import React from "react";
import Head from "next/head";
import Page from "components/pages/sign-in";
import withAuthentication from "lib/with-authentication";

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

export default withAuthentication(SignInPage);
