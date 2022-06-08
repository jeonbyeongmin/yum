import {Box, Button, Center, Container} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React, {useState} from 'react';
import CookingInfo from 'components/CookingInfo';
import IngredientList from 'components/IngredientList';
import RecipeStep from 'components/RecipeStep';
import Btn from 'components/Btn';
import {ICookingInfo, IRecipeStep} from 'types/recipe';

interface IRecistRecipe {}
const initCookingInfo = {
  name: '',
  desc: '',
  imgs: [],
  servings: 0,
  time: '',
  category: '',
};
function RegistRecipe({}: IRecistRecipe) {
  const [cookingInfo, setCookingInfo] = useState<ICookingInfo>(initCookingInfo);
  const [recipeSteps, setRecipeSteps] = useState<IRecipeStep[]>();
  const handleTextChange = (event: any) => {
    const newInfo: ICookingInfo = {...cookingInfo};
    const {
      currentTarget: {value, name},
    } = event;
    newInfo[name] = value;
    setCookingInfo(newInfo);
  };

  const handleSubmit = () => {
    console.log('submit btn click : ', cookingInfo, recipeSteps);
  };

  return (
    <Layout>
      <Container maxW="1024px">
        <CookingInfo handleChange={handleTextChange} />
        <IngredientList />
        <RecipeStep></RecipeStep>
        <Center>
          <Btn handleClick={handleSubmit}>레시피 등록</Btn>
        </Center>
      </Container>
    </Layout>
  );
}

export default RegistRecipe;
