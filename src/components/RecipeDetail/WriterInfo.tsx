import {HStack, Avatar, Box, Text, Button} from '@chakra-ui/react';

function WriterInfo() {
  return (
    <HStack w="100%" gap={5} paddingY={5}>
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
      <Button colorScheme={'orange'} fontSize="xl" size="lg">
        팔로우
      </Button>
    </HStack>
  );
}
export default WriterInfo;
