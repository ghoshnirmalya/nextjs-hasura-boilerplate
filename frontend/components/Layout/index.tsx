import { Box, ChakraProvider, theme, VStack } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box maxW="xl" mx="auto" w="full" py={8}>
        {children}
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
