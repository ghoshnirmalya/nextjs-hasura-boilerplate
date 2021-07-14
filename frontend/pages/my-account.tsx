import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import Page from "components/Pages/MyAccount";
import { FetchUserDocument } from "generated-graphql";
import { initializeApollo } from "lib/apolloClient";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React, { FC } from "react";
import ISession from "types/session";
import IUser from "types/user";

interface IProps {
  session: ISession;
  user: IUser;
}

const MyAccountPage: FC<IProps> = ({ session, user }) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>My Account Page</title>
      </Head>
      <Page user={user} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  const apolloClient = initializeApollo({}, session?.token);

  const { data } = await apolloClient.query({
    query: FetchUserDocument,
    variables: {
      userId: session?.id,
    },
  });

  return {
    props: {
      session,
      user: data.users_by_pk,
    },
  };
};

export default MyAccountPage;
