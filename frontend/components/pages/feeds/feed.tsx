import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import timeFromNow from "lib/timeFromNow";
import React, { FC } from "react";
import IFeed from "types/feed";

interface IProps {
  feed: IFeed;
}

const Feed: FC<IProps> = ({ feed }) => {
  const authorNode = () => {
    return (
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Avatar name={feed.author.name} src={feed.author.image} />
        <Stack>
          <Text fontWeight="bold">{feed.author.name}</Text>
          <Text>{timeFromNow(feed.created_at)}</Text>
        </Stack>
      </Stack>
    );
  };

  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {feed.body}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>
        {authorNode()}
        {bodyNode()}
      </Stack>
    </Box>
  );
};

export default Feed;
