import React from "react";
import { Box, Link as _Link, Button } from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";
import { cookieRemover, cookieParser } from "lib/cookie";
import Router from "next/router";

const Navbar: NextComponentType = () => {
  const isAuthenticated = !!cookieParser("token");

  const handleSignOut = () => {
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
          {isAuthenticated ? (
            <>
              <Link href="/my-profile">
                <_Link mr={4}>My Profile</_Link>
              </Link>
              <Button variantColor="purple" onClick={handleSignOut}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <_Link mr={4} href="/sign-in">
                Sign In
              </_Link>
              <Link href="/sign-up">
                <Button variantColor="purple">Sign Up</Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
