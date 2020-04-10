import React from "react";
import { Box, Grid } from "@chakra-ui/core";

const Index = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" maxW="xl">
      <Box p={8} bg="white" rounded="md" borderWidth={1}>
        Hello World!
      </Box>
    </Grid>
  );
};

export default Index;
