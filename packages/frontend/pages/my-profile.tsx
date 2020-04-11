import React from "react";
import Head from "next/head";
import Page from "components/pages/my-profile";
import withAuthentication from "lib/with-authentication";
import withApollo from "lib/with-apollo";

const MyProfilePage = () => {
  return (
    <>
      <Head>
        <title>My Profile Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withApollo(withAuthentication(MyProfilePage));
