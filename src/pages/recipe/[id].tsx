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

interface IRecipeDetail {
  info: IRecipeInfo;
}

function RecipeDetail({info}: IRecipeDetail) {
  console.log(info);
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

  return {
    props: {
      info: {
        cookingInfo: info?.cookingInfo,
        cookingImgs: info?.cookingImgs,
        steps: info?.steps,
      },
    },
  };
};

export default RecipeDetail;
