import React, { useState, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Grid,
  Link as _Link,
  Stack,
} from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";
import Link from "next/link";
import { cookieParser } from "lib/cookie";
import Loader from "components/loader";

const FETCH_USER_QUERY = gql`
  query fetchUser($id: uuid!) {
    user_by_pk(id: $id) {
      id
      email
      first_name
      last_name
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation updateUser(
    $email: bpchar
    $id: uuid!
    $firstName: bpchar
    $lastName: bpchar
  ) {
    update_user(
      where: { id: { _eq: $id } }
      _set: { email: $email, first_name: $firstName, last_name: $lastName }
    ) {
      returning {
        email
        first_name
        last_name
      }
    }
  }
`;

const MyProfile: NextPage = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const currentUserId = cookieParser("user-id");

  const { data, loading, error } = useQuery(FETCH_USER_QUERY, {
    variables: { id: currentUserId },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      const { email, first_name, last_name } = data.user_by_pk;

      setEmailAddress(email || "");
      setFirstName(first_name || "");
      setLastName(last_name || "");
    },
  });

  const [
    updateUserMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_USER_MUTATION);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { id } = data.user_by_pk;

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    updateUserMutation({
      variables: {
        id,
        email: emailAddress,
        firstName,
        lastName,
      },
    });
  };

  return (
    <Grid templateColumns="repeat(1, 1fr)" maxW="xl">
      <Box w="full">
        {mutationError ? (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            There was an error processing your request. Please try again!
          </Alert>
        ) : null}
        <Box
          minWidth={["full", "full", "full", "400px"]}
          p={8}
          bg="white"
          rounded="md"
          borderWidth={1}
        >
          <Box as="form" onSubmit={(e) => handleSubmit}>
            <Stack spacing={8}>
              <FormControl isRequired>
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
              <Stack isInline spacing={4} align="center">
                <Box w="full">
                  <FormControl isRequired>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      type="firstName"
                      id="firstName"
                      aria-describedby="First Name"
                      placeholder="John"
                      value={firstName}
                      onChange={(e: FormEvent<HTMLInputElement>) =>
                        setFirstName(e.currentTarget.value)
                      }
                    />
                  </FormControl>
                </Box>
                <Box w="full">
                  <FormControl isRequired>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input
                      type="lastName"
                      id="lastName"
                      aria-describedby="last Name"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e: FormEvent<HTMLInputElement>) =>
                        setLastName(e.currentTarget.value)
                      }
                    />
                  </FormControl>
                </Box>
              </Stack>
              <FormControl isRequired>
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
                <Stack isInline spacing={4} align="center">
                  <Button
                    type="submit"
                    variantColor="purple"
                    loadingText="Saving..."
                    onClick={handleSubmit}
                    isLoading={mutationLoading}
                  >
                    Save
                  </Button>
                  <Box>
                    <Link href="/">
                      <_Link>Cancel</_Link>
                    </Link>
                  </Box>
                </Stack>
              </FormControl>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default MyProfile;
