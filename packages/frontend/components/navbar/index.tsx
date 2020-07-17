import React from "react";
import { NextComponentType } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import { Box, Stack, Link as _Link, Button } from "@chakra-ui/core";

const Navbar: NextComponentType = () => {
  const [session] = useSession();

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            variantColor="cyan"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </Button>
        </Link>
      </Box>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signout">
          <Button
            variantColor="cyan"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Button>
        </Link>
      </Box>
    );
  };

  return (
    <Box borderWidth={1} shadow="sm">
      <Box justifyContent="space-between" p={4}>
        <Stack
          isInline
          spacing={4}
          align="center"
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/">
                  <_Link>Home</_Link>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/users">
                  <_Link>Users</_Link>
                </Link>
              </Box>
              {signInButtonNode()}
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
