import React from "react";
import { Box, Link as _Link, Button, Stack } from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  return (
    <Box borderBottomWidth={1} bg="white">
      <Box
        maxW="6xl"
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        color="gray.700"
      >
        <Stack
          isInline
          spacing={4}
          align="center"
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/">
                  <_Link>Home</_Link>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack isInline spacing={4} align="center">
              <_Link href="/sign-in">Sign In</_Link>
              <Link href="/sign-up">
                <Button variantColor="purple">Sign Up</Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
