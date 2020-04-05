import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { Stack, Box } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "root-reducer";
import { actions } from "slices/current-user";

const FETCH_USERS_QUERY = gql`
  query fetchUsers {
    user {
      id
    }
  }
`;

const Index = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state);
  const { data, loading, error } = useQuery(FETCH_USERS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // const { id } = data.user[0];

  // dispatch(actions.setCurrentUser({ id, name: "Harry Roberts" }));

  return (
    <>
      {currentUser.user.name}
      <button
        onClick={() =>
          dispatch(actions.editCurrentUser({ key: "name", value: "hello" }))
        }
      >
        Click
      </button>
      <Stack spacing={4}>
        {data.user.map((user: { id: number }) => {
          return <Box key={user.id}>{user.id}</Box>;
        })}
      </Stack>
    </>
  );
};

export default Index;
