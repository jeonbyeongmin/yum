import {Box, Text, HStack, SimpleGrid} from '@chakra-ui/react';
import React, {ReactNode} from 'react';
import IngredientInfo from 'components/IngredientInfo';
import {UserIcon} from 'components/Icon';
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
      <Box borderRadius="xl" overflow="hidden">
        <ProductImage src={imgs[0]} width={700} height={500} alt={info.name} />
      </Box>
      <Box>
        <Text fontSize={'4xl'} fontWeight="700" paddingY={5}>
          {info.name}
        </Text>
        <Text fontSize={'xl'}>{info.desc}</Text>
      </Box>
      {children}
      <Box
        paddingY={5}
        backgroundColor="#F6F6F6"
        width={'100%'}
        borderRadius="xl"
      >
        <HStack
          justifyContent={'space-between'}
          p={'10px 10%'}
          borderBottom="1px solid #DBDBDB"
        >
          <HStack>
            <UserIcon />
            <Text fontSize="xl">{info.servings}인분</Text>
          </HStack>
          <HStack>
            <UserIcon />
            <Text fontSize="xl">{info.time}</Text>
          </HStack>
          <HStack>
            <UserIcon />
            <Text fontSize="xl">{info.category}</Text>
          </HStack>
        </HStack>

        <SimpleGrid
          columns={2}
          spacingY={10}
          spacingX={5}
          p={'20px 10%'}
          justifyContent={'space-between'}
        >
          {ingredients.map(ing => (
            <IngredientInfo
              key={ing.iname}
              name={ing.iname}
              content={ing.iamount}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default RecipeInfo;
