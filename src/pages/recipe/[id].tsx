import {Box, Flex, HStack, VStack} from '@chakra-ui/react';
import Layout from 'components/Layout';
import IngredientCart from 'components/RecipeDetail/IngredientCart';
import RecipeDetailStep from 'components/RecipeDetail/RecipeDetailStep';
import RecipeInfo from 'components/RecipeDetail/RecipeInfo';
import WriterInfo from 'components/RecipeDetail/WriterInfo';
import React from 'react';
import {getRecipe} from 'api/recipe';
import {IRecipeInfo} from 'types/recipe';
import {GetServerSideProps} from 'next';
import {getIngredients} from 'api/store';
import {IIngredientItem} from 'types/store';

interface IRecipeDetail {
  info: IRecipeInfo;
  ingredients: IIngredientItem[];
}

function RecipeDetail({info, ingredients}: IRecipeDetail) {
  return (
    <Layout>
      <Flex gap={10} p={5} w="70%">
        <VStack flex={1} alignItems=" flex-start" gap={10}>
          <RecipeInfo
            info={info.cookingInfo}
            imgs={info.cookingImgs}
            ingredients={ingredients}
          >
            <WriterInfo />
          </RecipeInfo>
          <Box py={10}>
            <RecipeDetailStep steps={info.steps} />
          </Box>
        </VStack>
        <Box>
          <IngredientCart info={ingredients} />{' '}
        </Box>
      </Flex>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {id} = context.query;
  const info = await getRecipe(id);
  const iDocId = info?.ingredients.map(ing => ing.docId);
  const ingredients = await getIngredients(iDocId, info?.ingredients);
  return {
    props: {
      info: {
        cookingInfo: info?.cookingInfo,
        cookingImgs: info?.cookingImgs,
        steps: info?.steps,
      },
      ingredients: ingredients,
    },
  };
};

export default RecipeDetail;
