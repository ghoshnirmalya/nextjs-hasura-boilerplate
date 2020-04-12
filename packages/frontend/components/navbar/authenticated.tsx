import React from "react";
import { Box, Link as _Link, Button, Stack } from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";
import { cookieRemover } from "lib/cookie";
import Router from "next/router";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import withApollo from "lib/with-apollo";
import { cookieParser } from "lib/cookie";

const FETCH_USER_QUERY = gql`
  query fetchUser($id: uuid!) {
    user_by_pk(id: $id) {
      id
      user_roles {
        role {
          name
        }
      }
    }
  }
`;

const Navbar: NextComponentType = () => {
  const currentUserId = cookieParser("user-id");

  const { data, loading, error } = useQuery(FETCH_USER_QUERY, {
    variables: { id: currentUserId },
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <Box />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { user_roles } = data.user_by_pk;

  const handleSignOut = () => {
    cookieRemover("token");
    cookieRemover("user-id");

    Router.push("/sign-up");
  };

  return (
    <Box borderBottomWidth={1} bg="white">
      <Box
        maxW="6xl"
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        color="gray.700"
      >
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
              {user_roles[0].role.name === "admin" ? (
                <Box>
                  <Link href="/users">
                    <_Link>Users</_Link>
                  </Link>
                </Box>
              ) : null}
            </Stack>
          </Box>
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/my-profile">
                  <_Link>My Profile</_Link>
                </Link>
              </Box>
              <Box>
                <Button variantColor="purple" onClick={handleSignOut}>
                  Sign out
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default withApollo(Navbar);
