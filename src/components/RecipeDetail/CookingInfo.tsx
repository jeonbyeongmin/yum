import {Box, HStack, SimpleGrid, Text} from '@chakra-ui/react';
import {UserIcon} from 'components/Icon';
import IngredientInfo from 'components/IngredientInfo';

function CookingInfo() {
  return (
    <Box
      paddingY={5}
      backgroundColor="#F6F6F6"
      width={'100%'}
      borderRadius={10}
    >
      <HStack
        justifyContent={'space-between'}
        p={'10px 10%'}
        borderBottom="1px solid #DBDBDB"
      >
        <HStack>
          <UserIcon />
          <Text fontSize={'lg'}>1인분</Text>
        </HStack>
        <HStack>
          <UserIcon />
          <Text fontSize={'lg'}>10분</Text>
        </HStack>
        <HStack>
          <UserIcon />
          <Text fontSize={'lg'}>샌드위치</Text>
        </HStack>
      </HStack>
      <SimpleGrid
        columns={2}
        spacingY={10}
        spacingX={5}
        p={'20px 10%'}
        justifyContent={'space-between'}
      >
        <IngredientInfo name="식빵" content="2조각" />
        <IngredientInfo name="체다치즈" content="4개" />
        <IngredientInfo name="달걀" content="3개" />
        <IngredientInfo name="식빵" content="2조각" />
      </SimpleGrid>
    </Box>
  );
}
export default CookingInfo;
