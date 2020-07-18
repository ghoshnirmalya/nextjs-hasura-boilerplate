import React from "react";
import gql from "graphql-tag";
import { useQuery } from "urql";
import { Box, Stack, Text } from "@chakra-ui/core";
import IUser from "types/user";

const usersQuery = gql`
  query FetchUsers {
    users {
      id
      name
    }
  }
`;

const Query = () => {
  const [result] = useQuery({
    query: usersQuery,
  });

  if (result.fetching || !result.data) {
    return null;
  }

  if (result.error) {
    return null;
  }

  return (
    <Stack spacing={4}>
      {result.data.users.map((user: IUser) => (
        <Box key={user.id} p={4} shadow="sm" rounded="md">
          <Text>{user.name}</Text>
        </Box>
      ))}
    </Stack>
  );
};

export default Query;
