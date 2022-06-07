import {Container} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React from 'react';
import CookingInfo from 'components/CookingInfo';
import IngredientList from 'components/IngredientList';
import RecipeStep from 'components/RecipeStep';

interface IRecistRecipe {}
function RegistRecipe({}: IRecistRecipe) {
  return (
    <Layout>
      <Container maxW="1024px">
        <CookingInfo />
        <IngredientList />
        <RecipeStep></RecipeStep>
      </Container>
    </Layout>
  );
}

export default RegistRecipe;
