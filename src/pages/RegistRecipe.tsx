import {Box, Center, Container} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React, {useCallback, useEffect, useState} from 'react';
import CookingInfo from 'components/CookingInfo';
import IngredientList from 'components/IngredientList';
import RecipeStep from 'components/RecipeStep';
import Btn from 'components/Btn';
import {ICookingInfo, IRecipeStep} from 'types/recipe';
import CookingContent from 'components/CookingContent';
import ImageFileContainer from 'components/ImageFileBox';
import {addRecipe} from 'api/recipeRegist';

const initCookingInfo = {
  name: '',
  desc: '',
  imgs: [],
  servings: 0,
  time: '',
  category: '',
};

function RegistRecipe() {
  const [cookingInfo, setCookingInfo] = useState<ICookingInfo>(initCookingInfo);

  // 최적화 문제로 cookingInfo에서 images 분리
  const [cookingImages, setCookingImages] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState([1, 2]);
  const [recipeSteps, setRecipeSteps] = useState<IRecipeStep[]>([
    {
      step: 0,
      content: '',
      img: '',
    },
  ]);
  // const [recipeStepImages, setRecipeStepImages] = useState<string[]>([]);

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
    [cookingInfo],
  );

  const handlePlusBtnClick = useCallback(() => {
    const newSteps = {
      step: recipeSteps.length,
      content: '',
      img: '',
    };
    setRecipeSteps([...recipeSteps, newSteps]);
  }, [recipeSteps]);

  const handleStepTextChange = useCallback(
    (value: string, step: number) => {
      const newSteps = [...recipeSteps];
      newSteps[step] = {
        ...newSteps[step],
        content: value,
      };
      setRecipeSteps(newSteps);
    },
    [recipeSteps],
  );

  const handleStepImageChange = (event: any, step: number) => {
    // console.log('new', event.target.files[0], step);

    const newSteps = [...recipeSteps];
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = finishedEvent => {
      const {
        currentTarget: {result},
      } = finishedEvent;

      newSteps[step] = {
        ...newSteps[step],
        img: result,
      };
      // event.target.value = '';
    };
    reader.readAsDataURL(file);
    console.log('newSteps', newSteps);
    setRecipeSteps(newSteps);
  };

  const handleSubmit = () => {
    const data = {
      ...cookingInfo,
      cookingImgs: [...cookingImages],
      infredients: [...ingredients],
      steps: [...recipeSteps],
    };
    console.log('submit btn click : ', data);
    addRecipe(data);
  };
  const handleStepImgDelete = (step: number) => {
    const newSteps = [...recipeSteps];
    newSteps[step] = {
      ...newSteps[step],
      img: '',
    };
    setRecipeSteps(newSteps);
  };
  return (
    <Layout>
      <Container maxW="1024px">
        <Box marginY="10">
          <CookingContent handleChange={handleTextChange} />
          <ImageFileContainer
            images={cookingImages}
            setImages={setCookingImages}
          />
          <CookingInfo handleChange={handleTextChange} />
        </Box>

        <IngredientList />
        <RecipeStep
          steps={recipeSteps}
          handleStepChange={handleStepTextChange}
          handlePlusBtnClick={handlePlusBtnClick}
          handleStepImageChange={handleStepImageChange}
          handleStepImgDelete={handleStepImgDelete}
        />
        <Center>
          <Btn handleClick={handleSubmit}>레시피 등록</Btn>
        </Center>
      </Container>
    </Layout>
  );
}

export default RegistRecipe;
