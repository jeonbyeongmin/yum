import {Box, Button, Center, Container} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React, {useCallback, useState} from 'react';
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
import {useEffect} from 'react';

function RegistRecipe({}: IRecistRecipe) {
  const [cookingInfo, setCookingInfo] = useState<ICookingInfo>(initCookingInfo);
  const [recipeSteps, setRecipeSteps] = useState<IRecipeStep[]>([
    {
      step: 0,
      content: '',
      img: '',
    },
  ]);

  const handleTextChange = useCallback(
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const newInfo: ICookingInfo = {...cookingInfo};
      const {
        currentTarget: {value, name},
      } = event;
      newInfo[name] = value;
      setCookingInfo(newInfo);
    },
    [cookingInfo, setCookingInfo],
  );

  const handlePlusBtnClick = useCallback(() => {
    const newSteps = {
      step: recipeSteps.length,
      content: '',
      img: '',
    };
    setRecipeSteps([...recipeSteps, newSteps]);
  }, [recipeSteps, setRecipeSteps]);

  const handleStepTextChange = useCallback(
    (value: string, step: number) => {
      const newSteps = [...recipeSteps];
      newSteps[step] = {
        ...newSteps[step],
        content: value,
      };
      setRecipeSteps(newSteps);
    },
    [recipeSteps, setRecipeSteps],
  );

  const handleSubmit = () => {
    console.log('submit btn click : ', cookingInfo, recipeSteps);
  };

  return (
    <Layout>
      <Container maxW="1024px">
        <CookingInfo handleChange={handleTextChange} />
        <IngredientList />
        <RecipeStep
          steps={recipeSteps}
          handleStepChange={handleStepTextChange}
          handlePlusBtnClick={handlePlusBtnClick}
        />
        <Center>
          <Btn handleClick={handleSubmit}>레시피 등록</Btn>
        </Center>
      </Container>
    </Layout>
  );
}

export default RegistRecipe;
