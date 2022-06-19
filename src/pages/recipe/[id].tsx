import {HStack, VStack} from '@chakra-ui/react';
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

interface IRecipeDetail {
  info: IRecipeInfo;
  ingredients: any;
}

function RecipeDetail({info, ingredients}: IRecipeDetail) {
  console.log(info, ingredients);
  return (
    <Layout>
      <HStack gap={10} p={5} alignItems="flex-start">
        <VStack flex={1} alignItems=" flex-start">
          <RecipeInfo info={info.cookingInfo} imgs={info.cookingImgs}>
            <WriterInfo />
          </RecipeInfo>
          <RecipeDetailStep steps={info.steps} />
        </VStack>
        <IngredientCart />
      </HStack>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const {id} = context.query;
  const info = await getRecipe(id);
  const ingredients = await getIngredients(info?.ingredients);
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
