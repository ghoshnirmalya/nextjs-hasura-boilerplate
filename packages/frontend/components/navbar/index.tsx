import React, { Fragment } from "react";
import { Box, Link as _Link } from "@chakra-ui/core";
import { NextPage } from "next";
import Link from "next/link";

interface iProps {
  isAuthenticated: boolean;
}

const Navbar: NextPage<iProps> = ({ isAuthenticated }) => {
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
            <_Link>Logo</_Link>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <_Link mr={4}>Documentation</_Link>
          {!isAuthenticated ? (
            <Fragment>
              <_Link mr={4} href="/sign-in">
                Sign In
              </_Link>
              <Link href="/sign-up">
                <_Link>Sign Up</_Link>
              </Link>
            </Fragment>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
