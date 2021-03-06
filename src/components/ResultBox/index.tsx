import {VStack, Box, Flex, HStack, Button, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import {IMoneyBox} from 'types/store';
interface IResultBox {
  result: IMoneyBox;
}
function ResultBox({result}: IResultBox) {
  return (
    <VStack m={5} minW={'250px'} height="fit-content" alignItems={'stretch'}>
      <Box border="1px solid #B9B9B9" borderTopRadius="xl" borderBottom="none">
        <Flex flexDirection={'column'} gap={5} p={8}>
          <HStack justifyContent={'space-between'}>
            <BigText>총 상품 금액</BigText>
            <BigText fontWeight={'bold'}>
              {result.totalMoney
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              원
            </BigText>
          </HStack>
          <HStack justifyContent={'space-between'}>
            <BigText>총 배송비</BigText>
            <BigText fontWeight={'bold'}>
              {result.totalDelivery
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              원
            </BigText>
          </HStack>
        </Flex>
        <Box p={8} borderTop="1px solid #B9B9B9">
          <HStack justifyContent={'space-between'}>
            <BigText>결제예정금액</BigText>
            <BigText fontWeight={'bold'}>
              {result.estimateMoney
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              원
            </BigText>
          </HStack>
        </Box>
      </Box>
      <SubmitBtn
        w={'100%'}
        colorScheme="orange"
        borderTopRadius="0"
        borderBottomRadius="xl"
        h={'50px'}
        fontSize="xl"
      >
        주문하기
      </SubmitBtn>
    </VStack>
  );
}

const SubmitBtn = styled(Button)`
  margin-top: 0px !important;
`;

const BigText = styled(Text)`
  font-size: 1.5rem;
`;
export default ResultBox;
