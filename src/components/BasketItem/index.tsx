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
import React from 'react';

type Props = {};

function BasketItem() {
  return (
    <HStack
      alignItems={'center'}
      border={'1px solid #B9B9B9'}
      minH="80px"
      borderRadius={10}
      justifyContent="space-between"
      p={8}
    >
      <HStack gap={5}>
        <Checkbox size="lg" colorScheme="orange" defaultChecked></Checkbox>
        <Image
          src="https://www.korea.kr/newsWeb/resources/temp/images/000052/%EC%82%AC%EA%B3%BC_%EB%B3%B8%EB%AC%B8.jpg"
          width={'60px'}
          height={'60px'}
          objectFit={'cover'}
          alt="Dan Abramov"
          borderRadius={5}
        />
        <VStack alignItems={'flex-start'}>
          <Name fontSize={'2xl'} marginBottom="2">
            충주 유기농 사과 10개입
          </Name>
          <Text fontSize={'lg'} color="#8E8E8E">
            배송비 무료
          </Text>
        </VStack>
      </HStack>
      <Counter />
      <Text fontSize={'2xl'} fontWeight="700" color="#000000">
        5,000원
      </Text>
      <CloseIcon />
    </HStack>
  );
}
function Counter() {
  return (
    <HStack border={'1px solid #B9B9B9'} borderRadius={5}>
      <Button colorScheme={'whiteAlpha'} color="#000" size="md">
        <MinusIcon size={10} />
      </Button>
      <Text fontSize={'lg'} color="#000000">
        1
      </Text>
      <Button colorScheme={'whiteAlpha'} color="#000" size="md">
        <PlusOutLineIcon size={10} />
      </Button>
    </HStack>
  );
}
const Name = styled(Text)`
  font-weight: bold;
  display: block;
`;
export default BasketItem;
