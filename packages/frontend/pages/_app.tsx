import React from "react";
import NextApp from "next/app";
import { ThemeProvider, CSSReset, Box, Grid } from "@chakra-ui/core";
import AuthenticatedNavbar from "components/navbar/authenticated";
import UnauthenticatedNavbar from "components/navbar/unauthenticated";
import { cookieParser } from "lib/cookie";

class App extends NextApp {
  render() {
    const { Component } = this.props;
    const isAuthenticated = !!cookieParser("token");

    return (
      <ThemeProvider>
        <CSSReset />
        <Box fontSize="sm" bg="gray.50">
          {!!isAuthenticated ? (
            <AuthenticatedNavbar {...this.props} />
          ) : (
            <UnauthenticatedNavbar />
          )}
          <Grid
            templateColumns="repeat(1, 1fr)"
            bg="gray.50"
            minH="100vh"
            maxW="6xl"
            w="full"
            mx="auto"
            py={8}
            px={4}
          >
            <Box>
              <Component {...this.props} />
            </Box>
          </Grid>
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;
