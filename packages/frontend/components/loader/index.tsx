import React, { FC } from "react";
import { Box, CircularProgress } from "@chakra-ui/core";

const Loader: FC = () => {
  return (
    <Box w="full" textAlign="center" maxH="200px">
      <CircularProgress
        isIndeterminate
        color="purple"
        size="50px"
        thickness={0.15}
      />
    </Box>
  );
};

export default Loader;
