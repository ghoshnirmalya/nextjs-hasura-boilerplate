import React, { useState, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Stack,
  Link as _Link,
} from "@chakra-ui/core";
import useFetch from "use-http";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { cookieSetter } from "lib/cookie";
import Link from "next/link";

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [request, response] = useFetch(`${process.env.AUTH_URL}`);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const res = await request.post("/sign-in", {
      email,
      password,
    });

    if (response.ok) {
      cookieSetter("token", res.token);
      cookieSetter("user-id", res.id);

      await router.push("/");
    }
  };

  return (
    <Box
      minHeight={`calc(100vh - 80px)`}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      maxWidth="400px"
      w="full"
      mx="auto"
    >
      {request.error ? (
        <Alert status="error" variant="left-accent" mb={8} w="full">
          <AlertIcon />
          There was an error processing your request. Please try again!
        </Alert>
      ) : null}
      <Box p={8} bg="white" rounded="md" borderWidth={1} w="full">
        <Box as="form" onSubmit={handleSubmit}>
          <Stack spacing={8}>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="email"
                id="email"
                aria-describedby="Email address"
                placeholder="john@doe.com"
                value={email}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                aria-describedby="Password"
                placeholder="******"
                value={password}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setPassword(e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl>
              <Stack isInline spacing={4} align="center">
                <Button
                  type="submit"
                  variantColor="purple"
                  size="lg"
                  loadingText="Signing in..."
                  onClick={handleSubmit}
                  isLoading={request.loading}
                >
                  Sign In
                </Button>
                <Link href="/sign-up">
                  <_Link>Sign Up</_Link>
                </Link>
              </Stack>
            </FormControl>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
