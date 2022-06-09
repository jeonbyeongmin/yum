import {HStack, Avatar, Box, Text} from '@chakra-ui/react';
import Btn from 'components/Btn';

function WriterInfo() {
  return (
    <HStack w="100%" gap={5}>
      <Avatar
        src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/18/32775e06923a4bef0cb6093ff84d28ef1.jpg"
        size={'xl'}
      />
      <Box flex={1}>
        <Text fontWeight={'700'} fontSize="xl" marginBottom={3}>
          피그마
        </Text>
        <Text fontSize={'lg'}>피그마피그마피그마피그마피그마피그마피그마</Text>
      </Box>
      <Btn>팔로우</Btn>
    </HStack>
  );
}
export default WriterInfo;
