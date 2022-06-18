import {
  VStack,
  HStack,
  Checkbox,
  Image,
  Text,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {CloseIcon, MinusIcon, PlusOutLineIcon} from 'components/Icon';
import {IProductItem} from 'pages/shoppingbasket';
import React from 'react';

interface IBasketItem {
  data: IProductItem;
}
const getCommaFormatting = (str: string) => {
  return str.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
function BasketItem({data}: IBasketItem) {
  return (
    <HStack
      alignItems={'center'}
      border={'1px solid #B9B9B9'}
      minH="80px"
      borderRadius={10}
      justifyContent="space-between"
      p={8}
      flexWrap="nowrap"
    >
      <HStack gap={5}>
        <Checkbox size="lg" colorScheme="orange" defaultChecked></Checkbox>
        <Image
          src="https://www.korea.kr/newsWeb/resources/temp/images/000052/%EC%82%AC%EA%B3%BC_%EB%B3%B8%EB%AC%B8.jpg"
          width={'60px'}
          height={'60px'}
          objectFit={'cover'}
          alt="장바구니 이미지"
          borderRadius={5}
        />
        <VStack alignItems={'flex-start'} minW="fit-content">
          <Name fontSize={'2xl'} marginBottom="2">
            {data.name}
          </Name>
          <Text fontSize={'lg'} color="#8E8E8E">
            배송비 {data.delivery ? data.delivery + '원' : '무료'}
          </Text>
        </VStack>
      </HStack>
      <Counter />
      <Text
        fontSize={'2xl'}
        fontWeight="700"
        color="#000000"
        whiteSpace={'nowrap'}
      >
        {getCommaFormatting(data.price + '')}원
      </Text>
      <Box>
        <CloseIcon />
      </Box>
    </HStack>
  );
}
function Counter() {
  return (
    <HStack border={'1px solid #B9B9B9'} borderRadius={7}>
      <Button colorScheme={'whiteAlpha'} color="#000" size="md">
        <MinusIcon size={12} />
      </Button>
      <Text fontSize={'lg'} color="#000000">
        1
      </Text>
      <Button colorScheme={'whiteAlpha'} color="#000" size="md">
        <PlusOutLineIcon size={12} />
      </Button>
    </HStack>
  );
}
const Name = styled(Text)`
  font-weight: bold;
  display: block;
`;
export default BasketItem;
