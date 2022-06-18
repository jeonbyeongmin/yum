import {Box, Text, Image, HStack, SimpleGrid, StackDivider, Flex, Wrap, WrapItem} from '@chakra-ui/react';
import React, {ReactNode} from 'react';
import IngredientInfo from 'components/IngredientInfo';
import {UserIcon, TimeIcon, CategoryIcon} from 'components/Icon';
import {ICookingInfo} from 'types/recipe';
interface IRecipeInfo {
  children: ReactNode;
  info: ICookingInfo;
  imgs: string[];
}
const RecipeInfo = ({children, info, imgs}: IRecipeInfo) => {
  return (
    <>
      <Box borderRadius={5} overflow="hidden" width="100%" >
        {/* TODO : loading이 많이 걸리는 문제가 있음 */}
        <Image src={imgs[0]} alt="" width="100%" objectFit='cover'/>
      </Box>
      <Box>
        <Text fontSize={'24px'} fontWeight="700" pb={5}>
          {info.name}
        </Text>
        <Text fontSize={'16px'} lineHeight="normal">
          {info.desc}
        </Text>
      </Box>
      {children}
      <Box
        paddingY={10}
        backgroundColor="#f7f8fa"
        width={'100%'}
        borderRadius={10}
      >
        <HStack
          justifyContent={'space-between'}
          p={'0 10% 20px 10%'}
          borderBottom="1px solid #DBDBDB"
        >
          <HStack>
            <UserIcon />
            <Text fontSize={'14px'}>{info.servings}인분</Text>
          </HStack>
          <HStack>
            <TimeIcon />
            <Text fontSize={'14px'}>{info.time}</Text>
          </HStack>
          <HStack>
            <CategoryIcon />
            <Text fontSize={'14px'}>{info.category}</Text>
          </HStack>
        </HStack>
        {/* TODO : 재료 리스트 부분 */}
        <Wrap
          spacing='40px'
          p={'30px 10% 10px 10%'}
          justifyContent={'space-between'}
        >
          <WrapItem>
          <IngredientInfo name="식빵" content="2조각" />
          </WrapItem>
          <WrapItem>
          <IngredientInfo name="체다치즈" content="4개" />
          </WrapItem>
          <WrapItem>
          <IngredientInfo name="달걀" content="3개" />
          </WrapItem>
          <WrapItem>
          <IngredientInfo name="식빵" content="2조각" />
          </WrapItem>
        </Wrap>
      </Box>
    </>
  );
};

export default RecipeInfo;
