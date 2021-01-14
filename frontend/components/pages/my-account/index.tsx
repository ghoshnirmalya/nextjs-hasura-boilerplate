import { gql, useMutation } from "@apollo/client";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React, { FormEvent, useState } from "react";

const updateUserMutation = gql`
  mutation updateUser($userId: uuid!, $name: String) {
    update_users(where: { id: { _eq: $userId } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

const MyAccountPageComponent = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [session] = useSession();
  const [
    updateUser,
    { loading: updateUserFetching, error: updateUserError },
  ] = useMutation(updateUserMutation);

  const handleSubmit = () => {
    updateUser({
      variables: {
        userId: session.id,
        name,
      },
    });
  };

  const errorNode = () => {
    if (!updateUserError) {
      return false;
    }

    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{updateUserError}</AlertTitle>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
  };

  return (
    <Stack spacing={8}>
      <Heading>My Account</Heading>
      {errorNode()}
      <Box shadow="sm" rounded="lg">
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
              isDisabled={updateUserFetching}
            />
          </FormControl>
          <FormControl>
            <Button
              loadingText="Saving..."
              onClick={handleSubmit}
              isLoading={updateUserFetching}
            >
              Save
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};

export default MyAccountPageComponent;
