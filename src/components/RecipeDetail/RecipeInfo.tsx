import {Box, Text, HStack, SimpleGrid, Wrap} from '@chakra-ui/react';
import React, {ReactNode} from 'react';
import IngredientInfo from 'components/IngredientInfo';
import {CategoryIcon, TimeIcon, UserIcon} from 'components/Icon';
import {ICookingInfo} from 'types/recipe';
import {ProductImage} from 'components/ProductImage';
import {IIngredientItem} from 'types/store';

interface IRecipeInfo {
  children: ReactNode;
  info: ICookingInfo;
  ingredients: IIngredientItem[];
  imgs: string[];
}

const RecipeInfo = ({children, info, imgs, ingredients}: IRecipeInfo) => {
  return (
    <>
      <Box borderRadius={5} overflow="hidden" width="100%">
        {/* TODO : 정균오빠가 짠 코드 +> width="100%" objectFit='cover' */}
        <ProductImage src={imgs[0]} width={700} height={500} alt={info.name} />
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
            <Text fontSize="14px">{info.servings}인분</Text>
          </HStack>
          <HStack>
            <TimeIcon />
            <Text fontSize="14px">{info.time}</Text>
          </HStack>
          <HStack>
            <CategoryIcon />
            <Text fontSize="14px">{info.category}</Text>
          </HStack>
        </HStack>

        <Wrap
          spacing="40px"
          p={'30px 10% 10px 10%'}
          justifyContent={'space-between'}
        >
          {ingredients.map(ing => (
            <IngredientInfo
              key={ing.iname}
              name={ing.iname}
              content={ing.iamount}
            />
          ))}
        </Wrap>
      </Box>
    </>
  );
};

export default RecipeInfo;
