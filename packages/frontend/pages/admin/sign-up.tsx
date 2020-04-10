import React from "react";
import Head from "next/head";
import Page from "components/pages/admin/sign-up";
import WithAuthentication from "lib/with-authentication";

const AdminSignUpPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up Page</title>
      </Head>
      <Page />
    </>
  );
};

export default WithAuthentication(AdminSignUpPage);
