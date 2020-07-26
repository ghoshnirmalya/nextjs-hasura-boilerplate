import React from "react";
import gql from "graphql-tag";
import { useSubscription } from "urql";
import { Box, Stack, Text } from "@chakra-ui/core";
import IUser from "types/user";

const usersSubscription = gql`
  subscription FetchUsers {
    users {
      id
      name
    }
  }
`;

const Subscription = () => {
  const [result] = useSubscription({
    query: usersSubscription,
  });

  if (!result.data) {
    return <p>No new messages</p>;
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

export default Subscription;
