import {Box, HStack, Spinner, Text, VStack} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

// type Props = {};

function Loading() {
  return (
    <Wrapper display={'flex'} position="absolute" spacing={6}>
      <Spinner
        thickness="6px"
        speed="0.65s"
        emptyColor="gray.200"
        color="orange.500"
        // size="xl"
        w={'80px'}
        h="80px"
      />
      <Text fontSize={'2xl'} fontWeight={700}>
        로딩중입니다...
      </Text>
      <Text fontSize={'2xl'} fontWeight={700}>
        잠시만 기다려 주세요
      </Text>
    </Wrapper>
  );
}
const Wrapper = styled(VStack)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100vw;
  height: 100vh;
`;
export default Loading;
