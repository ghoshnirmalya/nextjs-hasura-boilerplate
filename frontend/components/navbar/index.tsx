import React, { ChangeEvent } from "react";
import { NextComponentType } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import {
  Box,
  Stack,
  Link as _Link,
  Button,
  useColorMode,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuGroup,
  MenuItem,
  Switch,
  MenuDivider,
} from "@chakra-ui/core";

const Navbar: NextComponentType = () => {
  const [session] = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.800", dark: "gray.100" };

  const handleToggleTheme = async (e: ChangeEvent<HTMLInputElement>) => {
    const theme: string = !!e.target.checked ? "dark" : "light";

    console.log(theme);

    toggleColorMode();
  };

  const profileDropDown = () => {
    if (!session) {
      return false;
    }

    return (
      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            color={color[colorMode]}
            borderColor={borderColor[colorMode]}
          >
            Profile <Icon name="chevron-down" />
          </MenuButton>
          <MenuList
            color={color[colorMode]}
            borderColor={borderColor[colorMode]}
            placement="bottom-end"
          >
            <MenuGroup title="Profile">
              <MenuItem>
                <Link href="/my-profile">
                  <_Link>My Account</_Link>
                </Link>
              </MenuItem>
              <MenuItem>
                <Stack justify="center" align="center" spacing={4} isInline>
                  <Box>Dark Theme</Box>
                  <Box>
                    <Switch
                      isChecked={colorMode === "dark"}
                      onChange={handleToggleTheme}
                    />
                  </Box>
                </Stack>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    );
  };

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            variantColor="cyan"
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
            variantColor="cyan"
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

  return (
    <Box bg={bgColor[colorMode]}>
      <Box
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        color={color[colorMode]}
        borderWidth={1}
        borderColor={borderColor[colorMode]}
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
              <Box>
                <Link href="/subscription">
                  <_Link>Subscription</_Link>
                </Link>
              </Box>
              <Box>
                <Link href="/query">
                  <_Link>Query</_Link>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack isInline spacing={4} align="center">
              {profileDropDown()}
              {signInButtonNode()}
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
