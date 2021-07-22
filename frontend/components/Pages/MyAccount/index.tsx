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
import { useUpdateUserMutation } from "generated-graphql";
import { useSession } from "next-auth/client";
import React, { FormEvent, useState } from "react";

const MyAccountPageComponent = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [session] = useSession();
  const [updateUser, { loading: updateUserFetching, error: updateUserError }] =
    useUpdateUserMutation();

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
      <Box shadow="lg" rounded="lg" p={4}>
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
              isDisabled={!name.trim()}
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
