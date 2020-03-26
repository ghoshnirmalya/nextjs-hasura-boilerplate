import React, { Fragment } from 'react'
import { Box, Link, Button } from '@chakra-ui/core'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface iProps {
  isAuthenticated: boolean
}

const Navbar: NextPage<iProps> = ({ isAuthenticated }) => {
  const router = useRouter()

  return (
    <Box
      p={4}
      display="flex"
      justifyContent="space-between"
      height={80}
      shadow="md"
    >
      <Box display="flex" alignItems="center">
        <Link>Logo</Link>
      </Box>
      <Box display="flex" alignItems="center">
        <Link mr={4}>Documentation</Link>
        {!isAuthenticated ? (
          <Fragment>
            <Link mr={4} href="/sign-in">
              Sign In
            </Link>
            <Button
              variant="solid"
              variantColor="messenger"
              onClick={() => router.push('/sign-up')}
            >
              Sign Up
            </Button>
          </Fragment>
        ) : null}
      </Box>
    </Box>
  )
}

export default Navbar
