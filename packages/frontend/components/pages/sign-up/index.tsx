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
  const [errors, setErrors] = useState([]);
  const [request, response] = useFetch(`${process.env.AUTH_URL}`);
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await request.post("/signup", {
      email,
      password,
    });

    cookieSetter("user-id", res.id);
    cookieSetter("user-roles", res.roles);
    cookieSetter("token", res.token);

    if (response.ok) {
      router.push("/");
    } else {
      setErrors(res.data.columns);
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
      {errors.length ? (
        <Alert status="error" variant="left-accent">
          <AlertIcon />
          There was an error processing your request. Please try again!
        </Alert>
      ) : null}
      <Box minWidth="400px" p={4}>
        <Box mb={8} as="form" onSubmit={handleSubmit}>
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
        </Box>
        <Box display="flex" justifyContent="flex-end" p={0}>
          <Button
            variantColor="purple"
            size="lg"
            loadingText="Signing up..."
            onClick={handleSubmit}
            w="full"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
