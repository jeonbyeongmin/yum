import { Box, Container, Flex, Heading, HStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { LeftArrowIcon, RightArrowIcon } from "components/Icon";
import Layout from "components/Layout";
import RecipeItem from "components/RecipeItem";

interface IRecipeItemList {
  title: string;
}
export interface IRecipeItem {
  id: number;
  name: string;
  desc: string;
  img: string;
  userName: string;
  userImg: string;
  likeCount: number;
  liked: boolean;
  bookmarked: boolean;
}

const initData: IRecipeItem[] = [
  {
    id: 1,
    name: "수제 베이컨 치즈 버거",
    desc: "군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    userName: "정균이",
    userImg: "",
    likeCount: 3,
    liked: false,
    bookmarked: false,
  },
  {
    id: 2,
    name: "수제 베이컨 치즈 버거",
    desc: "군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    userName: "정균이",
    userImg: "",
    likeCount: 3,
    liked: false,
    bookmarked: false,
  },
  {
    id: 3,
    name: "수제 베이컨 치즈 버거",
    desc: "군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    userName: "정균이",
    userImg: "",
    likeCount: 3,
    liked: false,
    bookmarked: false,
  },
  {
    id: 4,
    name: "수제 베이컨 치즈 버거",
    desc: "군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.",
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80",
    userName: "정균이",
    userImg: "",
    likeCount: 3,
    liked: false,
    bookmarked: false,
  },
];

function RecipeItemList({ title }: IRecipeItemList) {
  return (
    <Box w="100%" pos="relative">
      <Heading size="lg" marginY="10">
        {title}
      </Heading>
      <HStack gap={5}>
        {initData.map((data) => (
          <RecipeItem key={data.id} data={data} />
        ))}
      </HStack>
      <Flex>
        <Box pos="absolute" top="35%" left={-8}>
          <LeftArrowIcon />
        </Box>
        <Box pos="absolute" top="35%" right={-8}>
          <RightArrowIcon />
        </Box>
      </Flex>
    </Box>
  );
}

// const ArrowContainer = styled(Box)`
//   /* position: absolute; */
//   z-index: 2;
//   /* width: 100%; */
//   /* right: 0; */
// `;

export default RecipeItemList;
