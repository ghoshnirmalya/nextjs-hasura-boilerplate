import React from "react";
import Head from "next/head";
import Page from "components/pages/users";
import withAuthentication from "lib/with-authentication";
import withApollo from "lib/with-apollo";

const UsersPage = () => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <Page />
    </>
  );
};

export default withApollo(withAuthentication(UsersPage));
