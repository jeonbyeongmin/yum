import {Avatar, Box, Flex, Text, HStack, Button} from '@chakra-ui/react';
import {logout} from 'api/auth';

export interface IMyInfo {
  name: string | null;
  email: string | null;
  img: string | undefined;
}

function MyInfo({name, email, img}: IMyInfo) {
  return (
    <Flex py={16} px={10} justifyContent="space-between">
      <Flex alignItems={'center'}>
        <Avatar src={img} width={'140px'} height={'140px'} />
        <Box mx={10}>
          <Text fontSize="32px" fontWeight="bold" mb={6}>
            {name}
          </Text>
          <Text fontSize="20px" color="gray.500">
            {email}
          </Text>
        </Box>
      </Flex>
      <HStack gap={12} alignItems="start">
        <Button fontSize="16px" fontWeight="semibold" variant={'ghost'}>
          회원 정보 수정
        </Button>
        <Button
          fontSize="16px"
          fontWeight="semibold"
          variant={'ghost'}
          onClick={() => logout()}
        >
          로그아웃
        </Button>
        <Button
          fontSize="16px"
          fontWeight="semibold"
          color="red.500"
          variant={'ghost'}
        >
          회원 탈퇴
        </Button>
      </HStack>
    </Flex>
  );
}

export default MyInfo;
