import Layout from "components/layout";
import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const { session } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NextAuthProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextAuthProvider>
    </>
  );
};

export default App;
