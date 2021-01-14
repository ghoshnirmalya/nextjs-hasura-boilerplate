import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";

const IndexPageComponent = () => {
  const [session] = useSession();
  const heightOfNavbar: string = "74px";
  const containerPadding: string = "1rem";

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Create an account
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
    <Stack>
      <Flex
        minH={`calc(100vh - ${heightOfNavbar} - ${containerPadding}*2)`}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={4} maxW="xl" mx="auto">
          <Heading textAlign="center">Nextjs Hasura Boilerplate</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            Boilerplate for building applications using Hasura and Next.js. This
            demo application has been built using Chakra UI, NextAuth.js and
            Apollo.
          </Text>
          <Box>
            <Stack isInline align="center" justifyContent="center">
              {signInButtonNode()}
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default IndexPageComponent;
