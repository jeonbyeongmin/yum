import {Flex, VStack} from '@chakra-ui/react';
import Layout from 'components/Layout';
import IngredientCart from 'components/RecipeDetail/IngredientCart';
import RecipeDetailStep from 'components/RecipeDetail/RecipeDetailStep';
import RecipeInfo from 'components/RecipeDetail/RecipeInfo';
import WriterInfo from 'components/RecipeDetail/WriterInfo';
import CookingInfo from 'components/RecipeDetail/CookingInfo';
import React from 'react';

function Detail() {
  return (
    <Layout>
      <Flex gap={10} p={5}>
        <VStack flex={1} alignItems=" flex-start" gap={10}>
          <RecipeInfo />
          <WriterInfo />
          <CookingInfo />
          <RecipeDetailStep />
        </VStack>
        <IngredientCart />
      </Flex>
    </Layout>
  );
}

export default Detail;
