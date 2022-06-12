import { Flex, Image, Box } from "@chakra-ui/react";

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
  desc: "충북 충주시에서 직접 수확한 유기농 사과입니다.",
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
      <Box></Box>
    </Flex>
  );
}

export default ProductInfo;
