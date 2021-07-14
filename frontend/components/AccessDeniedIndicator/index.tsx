import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import { signIn } from "next-auth/client";
import Link from "next/link";
import React, { FC } from "react";

interface IProps {
  message?: string;
}

const AccessDeniedIndicator: FC<IProps> = ({
  message = "You need to Sign In to view this content!",
}) => {
  const iconNode = () => {
    return <WarningTwoIcon color="purple" boxSize="50px" />;
  };

  const signInButtonNode = () => {
    return (
      <Link href="/api/auth/signin">
        <Button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          {message}
        </Button>
      </Link>
    );
  };

  return (
    <Flex justifyContent="center" alignItems="center" h="200px">
      <Stack spacing={4} align="center">
        <Box>{iconNode()}</Box>
        <Box>{signInButtonNode()}</Box>
      </Stack>
    </Flex>
  );
};

export default AccessDeniedIndicator;
