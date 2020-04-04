import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { Stack, Box } from "@chakra-ui/core";

const fetchUsersQuery = gql`
  query {
    user {
      id
    }
  }
`;

const Index = () => {
  const { data, loading, error } = useQuery(fetchUsersQuery);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Stack spacing={4}>
      {data.user.map((user: { id: number }) => {
        return <Box key={user.id}>{user.id}</Box>;
      })}
    </Stack>
  );
};

export default Index;
