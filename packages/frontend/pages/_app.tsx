// @ts-nocheck

import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { cookieParser } from "lib/cookie";
import Navbar from "components/navbar";
import { Provider as NextAuthProvider } from "next-auth/client";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  Grid,
  Box,
  theme,
} from "@chakra-ui/core";

const App = ({ Component, pageProps }) => {
  const { session } = pageProps;
  const heightOfNavbar: string = "74px";

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <NextAuthProvider session={session}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Navbar />
          <Box>
            <Box
              minH={`calc(100vh - ${heightOfNavbar})`}
              maxW="6xl"
              mx="auto"
              p={4}
            >
              <Component {...pageProps} />
            </Box>
          </Box>
        </ThemeProvider>
      </NextAuthProvider>
    </>
  );
};

export default App;
