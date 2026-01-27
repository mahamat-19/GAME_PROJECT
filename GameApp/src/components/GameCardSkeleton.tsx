import {Skeleton, SkeletonText, Box } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
     <Box
      width="300px"
      borderWidth="1px"
      borderRadius="10px"
      overflow="hidden"
      padding="10px"
    >
      <Skeleton height="200px" width="100%" borderRadius={10} />

      <Box mt="4">
        <SkeletonText noOfLines={2} gap="4" />
      </Box>
    </Box>
  );
};
export default GameCardSkeleton