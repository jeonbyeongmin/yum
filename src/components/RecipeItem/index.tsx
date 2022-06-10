import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { BookmarkIcon, LikeIcon } from "components/Icon";
import { IRecipeItem } from "components/RecipeItemList";

interface IRecipeData {
  data: IRecipeItem;
}
function RecipeItem({ data }: IRecipeData) {
  return (
    <VStack>
      <Image
        src={data.img}
        width={"240px"}
        height={"240px"}
        borderRadius={5}
        objectFit={"cover"}
      />
      <Box p={3}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <LikeIcon />
            <Text fontSize="xl" color="gray.500" ml={2}>
              {data.likeCount}
            </Text>
          </Flex>
          <BookmarkIcon />
        </Flex>
        <Text mt="5" fontWeight="semibold" fontSize="2xl" lineHeight="tight">
          {data.name}
        </Text>
        <Text mt="5" color="gray.500" fontSize="xl">
          {data.desc}
        </Text>

        <Flex mt="5" alignItems="center">
          <Avatar src={data.userImg} width={"20px"} height={"20px"} />
          <Text ml="4" fontSize="lg" color="gray.500">
            {data.userName}
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
}

export default RecipeItem;
