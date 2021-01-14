import { Box, Stack } from "@chakra-ui/react";
import Loader from "components/Loader";
import AddNewFeedForm from "components/Pages/Feeds/AddNewFeedForm";
import Feed from "components/Pages/Feeds/Feed";
import { useFetchFeedsSubscription } from "generated-graphql";
import React from "react";
import IFeed from "types/feed";

const FeedsPageComponent = () => {
  const { data } = useFetchFeedsSubscription();

  if (!data) {
    return <Loader />;
  }

  return (
    <Stack spacing={8}>
      <Box>
        <AddNewFeedForm />
      </Box>
      {data.feeds.map((feed: IFeed, index: number) => {
        return (
          <Box key={index}>
            <Feed feed={feed} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default FeedsPageComponent;
