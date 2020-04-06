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
import useFetch from "use-http";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { cookieSetter } from "lib/cookie";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [request, response] = useFetch(`${process.env.AUTH_URL}`);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const res = await request.post("/signup", {
      email,
      password,
    });

    if (response.ok) {
      cookieSetter("token", res.token);

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
    >
      {request.error ? (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          There was an error processing your request. Please try again!
        </Alert>
      ) : null}
      <Box minWidth="400px" p={8} bg="white" rounded="md" borderWidth={1}>
        <Box as="form" onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
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
          <FormControl isRequired mb={8}>
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
            <Button
              type="submit"
              variantColor="purple"
              size="lg"
              loadingText="Signing up..."
              onClick={handleSubmit}
              isLoading={request.loading}
              w="full"
            >
              Sign Up
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
