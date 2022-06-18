import {Box, Text, Image, HStack, SimpleGrid} from '@chakra-ui/react';
import React, {ReactNode} from 'react';
import IngredientInfo from 'components/IngredientInfo';
import {UserIcon} from 'components/Icon';
import {ICookingInfo} from 'types/recipe';
interface IRecipeInfo {
  children: ReactNode;
  info: ICookingInfo;
  imgs: string[];
}
const RecipeInfo = ({children, info, imgs}: IRecipeInfo) => {
  return (
    <>
      <Box borderRadius={5} overflow="hidden">
        {/* TODO : loading이 많이 걸리는 문제가 있음 */}
        <Image src={imgs[0]} alt="" />
      </Box>
      <Box>
        <Text fontSize={'2xl'} fontWeight="700" paddingY={5}>
          {info.name}
        </Text>
        <Text fontSize={'lg'} lineHeight="normal">
          {info.desc}
        </Text>
      </Box>
      {children}
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
            <Text fontSize={'lg'}>{info.servings}인분</Text>
          </HStack>
          <HStack>
            <UserIcon />
            <Text fontSize={'lg'}>{info.time}</Text>
          </HStack>
          <HStack>
            <UserIcon />
            <Text fontSize={'lg'}>{info.category}</Text>
          </HStack>
        </HStack>
        {/* TODO : 재료 리스트 부분 */}
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
    </>
  );
};

export default RecipeInfo;
