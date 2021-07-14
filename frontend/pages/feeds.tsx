import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import Page from "components/Pages/Feeds";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React, { FC } from "react";
import ISession from "types/session";

interface IProps {
  session: ISession;
}

const FeedsPage: FC<IProps> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>Feeds Page</title>
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

export default FeedsPage;
