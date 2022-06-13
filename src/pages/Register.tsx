import {
  Box,
  Button,
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

function Register() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).max(10).required(),
    check: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required(),
  });

  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    console.log('submit');
  }

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
<<<<<<< HEAD
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing="5">
            <FormControl isInvalid={errors.name}>
              <Input
                fontSize="2xl"
                placeholder="이름"
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
                {...register('name')}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
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
            <FormControl isInvalid={errors.password}>
              <Input
                type="password"
                fontSize="2xl"
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
            <FormControl isInvalid={errors.check}>
              <Input
                type="password"
                fontSize="2xl"
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
                {...register('check')}
              />
              <FormErrorMessage>
                {errors.check && errors.check.message}
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
              가입
            </Text>
          </Button>
        </form>

=======
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
>>>>>>> a3244245aef8699ea076256403641804942e253f
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
