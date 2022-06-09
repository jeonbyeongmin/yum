import {Flex, VStack} from '@chakra-ui/react';
import Layout from 'components/Layout';
import IngredientCart from 'components/RecipeDetail/IngredientCart';
import RecipeDetailStep from 'components/RecipeDetail/RecipeDetailStep';
import RecipeInfo from 'components/RecipeDetail/RecipeInfo';
import React from 'react';

function Detail() {
  return (
    <Layout>
      <Flex gap={10} p={5}>
        <VStack flex={1} alignItems=" flex-start">
          <RecipeInfo />
          <RecipeDetailStep />
        </VStack>
        <IngredientCart />
      </Flex>
    </Layout>
  );
}

export default Detail;
