import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  IconButton,
  Link as _Link,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { NextComponentType } from "next";
import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import React from "react";

const Navbar: NextComponentType = () => {
  const [session] = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggleTheme = () => {
    toggleColorMode();
  };

  const linksForAllUsers = [
    {
      id: "home",
      label: "Home",
      href: "/",
    },
  ];

  const linksForAuthenticatedUsers = [
    {
      id: "feeds",
      label: "Feeds",
      href: "/feeds",
    },
    {
      id: "myAccount",
      label: "My Account",
      href: "/my-account",
    },
  ];

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </Button>
        </Link>
      </Box>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signout">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Button>
        </Link>
      </Box>
    );
  };

  const themeToggleButtonNode = () => {
    return (
      <IconButton
        aria-label="Toggle theme"
        fontSize="20px"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={handleToggleTheme}
      />
    );
  };

  return (
    <Box>
      <Box p={4} shadow="lg" pos="relative">
        <Box maxW="xl" mx="auto" w="full">
          <Stack
            isInline
            spacing={4}
            align="center"
            justifyContent="space-between"
            w="full"
          >
            <Box>
              <Stack isInline spacing={4} align="center" fontWeight="semibold">
                {linksForAllUsers.map((link) => {
                  return (
                    <Box key={link.id}>
                      <Link href={link.href}>
                        <_Link>{link.label}</_Link>
                      </Link>
                    </Box>
                  );
                })}
                {session &&
                  linksForAuthenticatedUsers.map((link) => {
                    return (
                      <Box key={link.id}>
                        <Link href={link.href}>
                          <_Link>{link.label}</_Link>
                        </Link>
                      </Box>
                    );
                  })}
              </Stack>
            </Box>
            <Box>
              <Stack isInline spacing={4} align="center">
                {themeToggleButtonNode()}
                {signInButtonNode()}
                {signOutButtonNode()}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
