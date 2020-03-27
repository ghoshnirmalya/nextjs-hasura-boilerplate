import React, { Fragment, useState, FormEvent } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from '@chakra-ui/core'
import useFetch from 'use-http'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Head from 'next/head'
import { cookieSetter } from '../../../lib/cookie'

const SignUp: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [request, response] = useFetch(`${process.env.AUTH_URL}`)
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await request.post('/signup', {
      email,
      password,
    })

    cookieSetter('user-id', res.id)
    cookieSetter('user-roles', res.roles)
    cookieSetter('token', res.token)

    if (response.ok) {
      router.push('/index')
    } else {
      setErrors(res.data.columns)
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Sign Up Page</title>
      </Head>
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
            <FormControl isRequired mb={8}>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="john@doe.com"
                value={email}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="******"
                size="md"
                value={password}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setPassword(e.currentTarget.value)
                }
              />
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="flex-end" p={0}>
            <Button
              variant="solid"
              variantColor="messenger"
              size="lg"
              loadingText="Signing up..."
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default SignUp
