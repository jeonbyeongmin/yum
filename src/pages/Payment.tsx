import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Layout from 'components/Layout';
import React from 'react';

type Props = {};

const Payment = ({}: Props) => {
  return (
    <Layout>
      <HStack flex={1} alignItems="flex-start">
        <VStack flex={3} marginX={5} marginY={3} alignItems="flex-start">
          <Heading size="lg">청구 상세 내용</Heading>
          <HStack>
            <InputLabel>성함</InputLabel>
            <Input maxW={'220px'} />
          </HStack>
          <HStack>
            <InputLabel>이메일 주소</InputLabel>
            <Input maxW={'220px'} />
          </HStack>
          <HStack>
            <InputLabel>{'ㅇㅇ'}</InputLabel>
            <Input maxW={'220px'} />
          </HStack>
          <VStack alignItems={'flex-start'} marginY={5}>
            <Flex>
              <Input maxW={'50px'} />
              <Button maxW={'50px'}>주소 검색</Button>
            </Flex>
            <Input />
            <Input />
          </VStack>
        </VStack>
        <Box bgColor={'red'} flex={2} minH="200px" maxH={'fit-content'}></Box>
      </HStack>
    </Layout>
  );
};

const InputLabel = styled(Text)`
  min-width: 100px;
`;
export default Payment;
