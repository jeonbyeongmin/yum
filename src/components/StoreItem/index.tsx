import { Box, Image, Text, VStack, Flex } from "@chakra-ui/react";
import { BookmarkIcon } from "components/Icon";
import { IStoreItem } from "components/StoreItemList";
import { useState } from "react";

interface IStoreData {
  data: IStoreItem;
}
function StoreItem({ data }: IStoreData) {
  const [bookmarked, setBookmarked] = useState<boolean>(data.bookmarked);

  function bookmarkClick() {
    setBookmarked(!bookmarked);
  }
  return (
    <VStack width={"240px"}>
      <Box overflow="hidden" cursor="pointer">
        <Image
          src={data.img}
          width={"240px"}
          height={"240px"}
          borderRadius={5}
          objectFit={"cover"}
          transition="all 0.2s"
          _hover={{
            transform: "scale(1.1)",
          }}
        />
      </Box>
      <Box p={2} width={"240px"}>
        <Text fontSize="xl" color="gray.500">
          {data.company}
        </Text>
        <Text
          my={4}
          fontWeight="400"
          fontSize="2xl"
          lineHeight="tight"
          transition="all 0.2s"
          cursor="pointer"
          _hover={{ opacity: "0.6" }}
        >
          {data.name}
        </Text>
        <Flex justifyContent="space-between">
          <Text fontSize="3xl" fontWeight="bold">
            {data.price} 원
          </Text>
          <Box cursor={"pointer"} onClick={bookmarkClick}>
            <BookmarkIcon activate={bookmarked} />
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
}

export default StoreItem;
