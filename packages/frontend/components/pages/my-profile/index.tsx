import React, { useState, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";

const FETCH_USER_QUERY = gql`
  query fetchUser {
    user {
      id
      email
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation updateUser($email: bpchar, $id: uuid!) {
    update_user(where: { id: { _eq: $id } }, _set: { email: $email }) {
      returning {
        email
      }
    }
  }
`;

const MyProfile: NextPage = () => {
  const [emailAddress, setEmailAddress] = useState("");

  const { data, loading, error } = useQuery(FETCH_USER_QUERY, {
    onCompleted: (data) => {
      const { email } = data.user[0];

      setEmailAddress(email);
    },
  });

  const [
    updateUserMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_USER_MUTATION);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { id } = data.user[0];

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    updateUserMutation({
      variables: {
        id,
        email: emailAddress,
      },
    });
  };

  return (
    <Box
      minHeight={`calc(100vh - 80px)`}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {mutationError ? (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          There was an error processing your request. Please try again!
        </Alert>
      ) : null}
      <Box minWidth="400px" p={8} bg="white" rounded="md" borderWidth={1}>
        <Box as="form" onSubmit={(e) => handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel htmlFor="id">User ID</FormLabel>
            <Input
              type="id"
              id="id"
              aria-describedby="id"
              placeholder="0123-4567-89"
              defaultValue={id}
              isDisabled
            />
          </FormControl>
          <FormControl isRequired mb={8}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              type="email"
              id="email"
              aria-describedby="Email address"
              placeholder="john@doe.com"
              value={emailAddress}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setEmailAddress(e.currentTarget.value)
              }
            />
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              variantColor="purple"
              loadingText="Saving..."
              onClick={handleSubmit}
              isLoading={mutationLoading}
            >
              Save
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default MyProfile;
