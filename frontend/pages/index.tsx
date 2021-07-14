import React from "react";
import Head from "next/head";
import Page from "components/Pages/Index/index";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/client";
import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import ISession from "types/session";

interface IProps {
  session: ISession;
}

const IndexPage: NextPage<IProps> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Page />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default IndexPage;
