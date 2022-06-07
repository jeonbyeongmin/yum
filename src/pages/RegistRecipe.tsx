import {Box, Button, Container} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React, {useState} from 'react';
import CookingInfo from 'components/CookingInfo';
import IngredientList from 'components/IngredientList';
import RecipeStep from 'components/RecipeStep';
import Btn from 'components/Btn';
import {IRecipeInfo, IRecipeStep} from 'types/recipe';
import {useRecoilState} from 'recoil';
import {recipeRegistState} from 'recoil/recipeRegist';

interface IRecistRecipe {}

function RegistRecipe({}: IRecistRecipe) {
  // const [info, setInfo] = useState<IRecipeInfo>(initInfo);
  const [info, setInfo] = useRecoilState(recipeRegistState);

  const handleTextChange = (event: any) => {
    const newInfo: IRecipeInfo = {...info};
    const {
      currentTarget: {value, name},
    } = event;
    newInfo[name] = value;
    console.log('change', name, value, newInfo);
    setInfo(newInfo);
  };

  return (
    <Layout>
      <Container maxW="1024px">
        <CookingInfo handleChange={handleTextChange} />
        <IngredientList />
        <RecipeStep></RecipeStep>
        <Box margin="50px auto 0">
          <Btn>레시피 등록</Btn>
        </Box>
      </Container>
    </Layout>
  );
}

export default RegistRecipe;
