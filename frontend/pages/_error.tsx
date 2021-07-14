import React from "react";
import Head from "next/head";
import Page from "components/Pages/Error";
import { NextPage } from "next";

interface IProps {
  statusCode: number;
}

const Error: NextPage<IProps> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Error Page</title>
      </Head>
      <Page statusCode={statusCode} />
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default Error;
