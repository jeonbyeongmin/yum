import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import {GoogleIcon} from 'components/Icon';
import React from 'react';

function Login() {
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
        >
          YUM
        </Text>
        <Text paddingY="3rem" fontSize="4xl" fontWeight="extrabold">
          로그인
        </Text>
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
          marginY="3"
          borderColor="gray.200"
          borderRadius="xl"
        />
        <Input
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
          marginY="3"
          borderColor="gray.200"
          borderRadius="xl"
        />
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
            로그인
          </Text>
        </Button>

        <HStack alignContent="cetner" justifyContent="center">
          <Text fontSize="xl">비밀번호 찾기</Text>
          <Center height="14px">
            <Divider orientation="vertical" marginX="3" />
          </Center>
          <Text fontSize="xl">회원가입</Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Login;
