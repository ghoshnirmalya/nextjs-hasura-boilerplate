import React from "react";
import Head from "next/head";
import Page from "components/pages/sign-up";
import withAuthentication from "lib/with-authentication";

const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withAuthentication(SignUpPage);
