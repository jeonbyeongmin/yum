import {Box, Button, Flex, HStack, Input, Text, VStack} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function Register() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="gray.50"
      minHeight="100vh"
    >
      <Box
        minW="3xl"
        borderWidth="1px"
        borderRadius="xl"
        bg="white"
        padding="5.5rem 6.5rem"
        shadow="base"
      >
        <Text
          paddingY="2rem"
          fontFamily="Binggrae"
          fontSize="6xl"
          fontWeight="extrabold"
          color="orange.500"
          letterSpacing="tighter"
        >
          YUM
        </Text>
        <Text paddingY="3rem" fontSize="4xl" fontWeight="extrabold">
          회원가입
        </Text>
        <VStack spacing="5">
          <Input
            placeholder="이메일"
            _placeholder={{
              color: 'gray.300',
              fontSize: '2xl',
              fontWeight: 'medium',
            }}
            shadow="sm"
            paddingLeft="10"
            paddingY="12"
            size="lg"
            borderColor="gray.200"
            borderRadius="xl"
          />
          <Input
            type="password"
            placeholder="비밀번호"
            _placeholder={{
              color: 'gray.300',
              fontSize: '2xl',
              fontWeight: 'medium',
            }}
            shadow="sm"
            paddingLeft="10"
            paddingY="12"
            size="lg"
            borderColor="gray.200"
            borderRadius="xl"
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            _placeholder={{
              color: 'gray.300',
              fontSize: '2xl',
              fontWeight: 'medium',
            }}
            shadow="sm"
            paddingLeft="10"
            paddingY="12"
            size="lg"
            borderColor="gray.200"
            borderRadius="xl"
          />
        </VStack>

        <Button
          width="full"
          marginY="10"
          borderRadius="xl"
          paddingY="12"
          fontSize="xl"
          colorScheme="orange"
          _focus={{border: 'none'}}
        >
          <Text fontSize="2xl" fontWeight="bold">
            가입
          </Text>
        </Button>
        <HStack justifyContent="center">
          <Text fontSize="xl">이미 계정이 있으신가요?</Text>
          <Link href="/Login" passHref>
            <a>
              <Text fontSize="xl" as="u">
                로그인
              </Text>
            </a>
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Register;
