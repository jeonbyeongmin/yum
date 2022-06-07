import {Button, Container} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React from 'react';
import CookingInfo from 'components/CookingInfo';
import IngredientList from 'components/IngredientList';
import RecipeStep from 'components/RecipeStep';
import Btn from 'components/Btn';

interface IRecistRecipe {}
function RegistRecipe({}: IRecistRecipe) {
  return (
    <Layout>
      <Container maxW="1024px">
        <CookingInfo />
        <IngredientList />
        <RecipeStep></RecipeStep>
        <Btn margin="50px auto 0">레시피 등록</Btn>
      </Container>
    </Layout>
  );
}

export default RegistRecipe;
