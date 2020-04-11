import React from "react";
import { Box, Grid, Link as _Link, Heading, Text } from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import Loader from "components/loader";

const FETCH_USER_QUERY = gql`
  query fetchUser {
    user(order_by: { created_at: asc }) {
      id
      email
      first_name
      last_name
    }
  }
`;

const Users: NextPage = () => {
  const { data, loading, error } = useQuery(FETCH_USER_QUERY);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {data.user.map(
        (user: { id: number; first_name: string; last_name: string }) => {
          return (
            <Box key={user.id} p={8} bg="white" rounded="md" borderWidth={1}>
              <Heading as="h4" size="md">
                {user.first_name} {user.last_name}
              </Heading>
              <Text fontSize="sm" color="gray.700">
                {user.id}
              </Text>
            </Box>
          );
        }
      )}
    </Grid>
  );
};

export default Users;
