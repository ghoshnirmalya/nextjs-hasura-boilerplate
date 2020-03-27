import React, { Fragment } from 'react'
import { Box, Link } from '@chakra-ui/core'
import { NextPage } from 'next'
import { Button } from '@hasura-next/components';

interface iProps {
  isAuthenticated: boolean
}

const Navbar: NextPage<iProps> = ({ isAuthenticated }) => {
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
            <Button>
              Sign Up
            </Button>
          </Fragment>
        ) : null}
      </Box>
    </Box>
  )
}

export default Navbar
