import React, { Fragment } from "react";
import { Box, Link as _Link, Button } from "@chakra-ui/core";
import { NextPage } from "next";
import Link from "next/link";
import { cookieRemover } from "../../lib/cookie";
import Router from "next/router";

interface iProps {
  isAuthenticated: boolean;
}

const Navbar: NextPage<iProps> = ({ isAuthenticated }) => {
  const handleSignOut = () => {
    cookieRemover("user-id");
    cookieRemover("user-roles");
    cookieRemover("token");

    Router.push("/sign-up");
  };

  return (
    <Box borderBottomWidth={1}>
      <Box
        maxW="6xl"
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        color="gray.700"
      >
        <Box display="flex" alignItems="center">
          <Link href="/">
            <_Link>Home</_Link>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          {!isAuthenticated ? (
            <Fragment>
              <_Link mr={4} href="/sign-in">
                Sign In
              </_Link>
              <Link href="/sign-up">
                <Button variantColor="purple">Sign Up</Button>
              </Link>
            </Fragment>
          ) : (
            <Button variantColor="purple" onClick={handleSignOut}>
              Sign out
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
