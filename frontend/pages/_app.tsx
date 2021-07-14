import { ApolloProvider } from "@apollo/client";
import Layout from "components/Layout";
import { useApollo } from "lib/apolloClient";
import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import ISession from "types/session";

const App = ({ Component, pageProps }: AppProps) => {
  const { session }: { session: ISession } = pageProps;
  const apolloClient = useApollo(pageProps.initialApolloState, session?.token);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NextAuthProvider session={session}>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </NextAuthProvider>
    </>
  );
};

export default App;
