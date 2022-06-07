import {
  Box,
  Image,
  Text,
  Checkbox,
  VStack,
  Flex,
  HStack,
  Button,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import BasketItem from 'components/BasketItem';
import Layout from 'components/Layout';
import React from 'react';
type Props = {};

function ShoppingBasket({}: Props) {
  return (
    <Layout>
      <Checkbox size="lg" colorScheme="orange" defaultChecked>
        모두 선택
      </Checkbox>
      <Flex>
        <VStack flex={1} alignItems="stretch" gap={3} marginY={5}>
          <BasketItem />
          <BasketItem />
          <BasketItem />
        </VStack>
        <ResultBox />
      </Flex>
    </Layout>
  );
}
function ResultBox() {
  return (
    <VStack m={5} minW={'250px'} height="fit-content" alignItems={'stretch'}>
      <Box border="1px solid #B9B9B9" borderTopRadius={5} borderBottom="none">
        <Flex flexDirection={'column'} gap={5} p={8}>
          <HStack justifyContent={'space-between'}>
            <BigText>총 상품 금액</BigText>
            <BigText fontWeight={'bold'}>8,900원</BigText>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <BigText>총 배송비</BigText>
            <BigText fontWeight={'bold'}>3,000원</BigText>
          </HStack>
        </Flex>
        <Box p={8} borderTop="1px solid #B9B9B9">
          <HStack justifyContent={'space-between'}>
            <BigText>결제예정금액</BigText>
            <BigText fontWeight={'bold'}>11,900원</BigText>
          </HStack>
        </Box>
      </Box>
      <Button
        w={'100%'}
        colorScheme="orange"
        marginTop={0}
        borderTopRadius="0"
        h={'50px'}
        fontSize="xl"
      >
        주문하기
      </Button>
    </VStack>
  );
}
const BigText = styled(Text)`
  font-size: 1.4rem;
`;
export default ShoppingBasket;
