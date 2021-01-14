import { Box, Stack } from "@chakra-ui/react";
import Loader from "components/loader";
import AddNewFeedForm from "components/pages/feeds/add-new-feed-form";
import Feed from "components/pages/feeds/feed";
import { useFetchFeedsSubscription } from "generated-graphql";
import React from "react";
import IFeed from "types/feed";

const FeedsPageComponent = () => {
  const { data, loading } = useFetchFeedsSubscription();

  if (loading) {
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
