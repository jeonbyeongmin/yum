import {
  Flex,
  Image,
  Box,
  Text,
  HStack,
  Button,
  Wrap,
  WrapItem,
  VStack,
} from "@chakra-ui/react";
import { MinusIcon, PlusOutLineIcon } from "components/Icon";

interface IProductInfo {
  id: number;
  name: string;
  desc: string;
  price: number;
  delivery: number;
  company: string;
  bookmarked: boolean;
  img: string;
}

const productData: IProductInfo = {
  id: 1,
  name: "충주 유기농 사과 1박스",
  desc: "충북 충주시에서 직접 수확한 유기농 사과입니다.충북 충주시에서 직접 수확한 유기농 사과입니다.충북 충주시에서 직접 수확한 유기농 사과입니다.충북 충주시에서 직접 수확한 유기농 사과입니다.",
  img: "https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
  price: 12000,
  delivery: 3000,
  company: "충주사과",
  bookmarked: false,
};

function ProductInfo() {
  return (
    <Flex my={20}>
      <Image
        src={productData.img}
        width={"500px"}
        height={"500px"}
        borderRadius={5}
        objectFit={"cover"}
      ></Image>
      <Box px={10} width="500px">
        <Box>
          <Text fontSize="14px" color="orange.400" fontWeight="500">
            {productData.company}
          </Text>
          <Text my={5} fontSize="24px" fontWeight="500">
            {productData.name}
          </Text>
          <Text mt={16} fontSize="14px" color="gray.700">
            {productData.desc}
          </Text>
        </Box>

        <HStack mt={16} justifyContent="space-between">
          <Box>
            <Text fontSize="30px" fontWeight="700">
              {productData.price} 원
            </Text>
            <Text my={3} fontSize="16px">
              배송비{" "}
              {productData.delivery ? productData.delivery + " 원" : "무로"}
            </Text>
          </Box>
          <Counter />
        </HStack>
        <Box mt={60}>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="20px" fontWeight="500">
              주문금액
            </Text>
            <Text fontSize="26px" fontWeight="700">
              {productData.price + productData.delivery} 원
            </Text>
          </Flex>
          <Flex mt={5} justifyContent="space-between">
            <Button
              fontSize="16px"
              height="50px"
              width="49%"
              backgroundColor="white"
              border="1px"
              borderColor="orange"
              color="orange"
              _hover={{
                opacity: "0.7",
              }}
            >
              장바구니
            </Button>
            <Button
              fontSize="16px"
              height="50px"
              width="49%"
              backgroundColor="orange"
              color="white"
              _hover={{
                opacity: "0.7",
              }}
            >
              주문하기
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

function Counter() {
  return (
    <HStack border={"1px solid #B9B9B9"} borderRadius={7}>
      <Button colorScheme={"whiteAlpha"} color="#000" size="md">
        <MinusIcon size={12} />
      </Button>
      <Text fontSize={"lg"} color="#000000">
        1
      </Text>
      <Button colorScheme={"whiteAlpha"} color="#000" size="md">
        <PlusOutLineIcon size={12} />
      </Button>
    </HStack>
  );
}

function Btn() {}

export default ProductInfo;
