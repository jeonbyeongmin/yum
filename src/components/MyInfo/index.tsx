import { Avatar, Box, Flex, Text, HStack } from "@chakra-ui/react";

export interface IMyInfo {
  name: string;
  email: string;
  img: string;
}

const userData: IMyInfo = {
  name: "우정균",
  email: "wjk6044@naver.com",
  img: "",
};

function MyInfo() {
  return (
    <Flex py={16} px={10} justifyContent="space-between">
      <Flex alignItems={"center"}>
        <Avatar src={userData.img} width={"140px"} height={"140px"} />
        <Box mx={10}>
          <Text fontSize="32px" fontWeight="bold" mb={6}>
            {userData.name}
          </Text>
          <Text fontSize="20px" color="gray.500">
            {userData.email}
          </Text>
        </Box>
      </Flex>
      <HStack gap={12} alignItems="start">
        <Text
          fontSize="16px"
          fontWeight="semibold"
          _hover={{ opacity: "0.7" }}
          cursor="pointer"
        >
          회원 정보 수정
        </Text>
        <Text
          fontSize="16px"
          fontWeight="semibold"
          _hover={{ opacity: "0.7" }}
          cursor="pointer"
        >
          로그아웃
        </Text>
        <Text
          fontSize="16px"
          fontWeight="semibold"
          color="red.500"
          _hover={{ opacity: "0.7" }}
          cursor="pointer"
        >
          회원 탈퇴
        </Text>
      </HStack>
    </Flex>
  );
}

export default MyInfo;