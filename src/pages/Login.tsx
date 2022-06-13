import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {signIn} from 'api/auth';
import {useRouter} from 'next/router';

interface FormData {
  email: string;
  password: string;
}

function Login() {
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).max(10).required(),
  });

  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const {email, password} = data;
      const res = await signIn(email, password);

      if (res.statusCode === 200) {
        router.push('/');
      } else {
        console.log(res.errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          로그인
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing="5">
            <FormControl isInvalid={errors.email ? true : false}>
              <Input
                fontSize="2xl"
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
                {...register('email')}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password ? true : false}>
              <Input
                fontSize="2xl"
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
                {...register('password')}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>

          <Button
            type="submit"
            isLoading={isSubmitting}
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
        </form>

        <HStack alignContent="cetner" justifyContent="center">
          <a>
            <Text fontSize="xl">비밀번호 찾기</Text>
          </a>
          <Center height="14px">
            <Divider orientation="vertical" marginX="3" />
          </Center>
          <Link href="/Register" passHref>
            <a>
              <Text fontSize="xl">회원가입</Text>
            </a>
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Login;
