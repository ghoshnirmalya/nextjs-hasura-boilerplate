import React from "react";
import NextApp from "next/app";
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  theme,
  Box
} from "@chakra-ui/core";

import withApollo from "../lib/with-apollo";
import Navbar from "../components/navbar";

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Box fontSize="sm">
            <Navbar isAuthenticated={pageProps.isAuthenticated} />
            <Box bg="gray.50">
              <Box minH="100vh" maxW="6xl" w="full" mx="auto" p={4}>
                <Component {...this.props} />
              </Box>
            </Box>
          </Box>
        </ColorModeProvider>
      </ThemeProvider>
    );
  }
}

export default withApollo(App);
