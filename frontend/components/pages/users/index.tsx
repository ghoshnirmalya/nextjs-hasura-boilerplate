import React from "react";
import gql from "graphql-tag";
import { useSubscription } from "urql";
import { Box, Stack, Text, Image, useColorMode, Grid } from "@chakra-ui/core";
import IUser from "types/user";

const usersSubscription = gql`
  subscription fetchUsers {
    users {
      id
      name
      email
      image
    }
  }
`;

const UsersPageComponent = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.800", dark: "gray.100" };

  const [result] = useSubscription({
    query: usersSubscription,
  });

  if (!result.data) {
    return <p>No new messages</p>;
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={4}>
      {result.data.users.map((user: IUser) => (
        <Box
          key={user.id}
          p={4}
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          borderWidth={1}
          borderColor={borderColor[colorMode]}
          shadow="sm"
          rounded="lg"
        >
          <Stack spacing={4} d="flex" alignItems="center">
            <Image
              rounded="full"
              src={user.image}
              alt={user.name}
              htmlWidth="150"
            />
            <Text fontSize="md" fontWeight="bold">
              {user.name}
            </Text>
          </Stack>
        </Box>
      ))}
    </Grid>
  );
};

export default UsersPageComponent;
