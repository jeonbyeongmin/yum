import {Box, Button, Center, Container, Text} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React, {useCallback, useState} from 'react';
import CookingInfo from 'components/CookingInfo';
import IngredientList from 'components/IngredientList';
import RecipeStep from 'components/RecipeStep';
import {
  ICookingInfo,
  IRecipeIngredientItem,
  IRecipeRegist,
  IRecipeStep,
} from 'types/recipe';
import CookingContent from 'components/CookingContent';
import ImageFileContainer from 'components/ImageFileBox';
import {addRecipe} from 'api/recipeRegist';
import {useRouter} from 'next/router';
import {IIngredientItem, IStoreItem} from 'types/store';

const initCookingInfo = {
  name: '',
  desc: '',
  imgs: [],
  servings: 0,
  time: '',
  category: '',
};

const initRecipeStep = [
  {
    step: 0,
    content: '',
    img: '',
  },
];

function Regist() {
  const [cookingInfo, setCookingInfo] = useState<ICookingInfo>(initCookingInfo);

  // 최적화 문제로 cookingInfo에서 images 분리
  const [cookingImages, setCookingImages] = useState<string[]>([]);
  // const [ingredients, setIngredients] = useState([1, 2]);
  const [selectIngredients, setSelectIngredients] = useState<IIngredientItem[]>(
    [],
  );
  const [recipeSteps, setRecipeSteps] = useState<IRecipeStep[]>(initRecipeStep);
  const router = useRouter();
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

  const handleStepImageChange = useCallback(
    (event: any, step: number) => {
      const newSteps = [...recipeSteps];
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = finishedEvent => {
        const {
          currentTarget: {result},
        } = finishedEvent;

        newSteps[step] = {
          ...newSteps[step],
          img: result,
        };
        setRecipeSteps(newSteps);
      };
    },
    [recipeSteps],
  );

  // TODO: 최적화 문제로 step에서 image 빼서 관리
  const handleStepImgDelete = useCallback(
    (step: number) => {
      const newSteps = [...recipeSteps];
      newSteps[step] = {
        ...newSteps[step],
        img: '',
      };
      setRecipeSteps(newSteps);
    },
    [recipeSteps],
  );

  const handleSubmit = () => {
    const ingredient = selectIngredients.map(ing => {
      return {
        docId: ing.docId,
        iamount: ing.iamount,
        iname: ing.iname,
      };
    }) as IRecipeIngredientItem[];
    console.log(ingredient);
    const data: IRecipeRegist = {
      cookingInfo: cookingInfo,
      cookingImgs: [...cookingImages],
      ingredients: ingredient,
      steps: [...recipeSteps],
    };
    console.log('submit btn click : ', data);
    addRecipe(data).then(res => {
      if (res?.state) {
        alert('레시피 등록에 성공하였습니다!');
        router.push('/');
      }
    });
  };

  const handleIngredientSelect = (item: IStoreItem, amount: string) => {
    console.log('선택', [...selectIngredients, {...item, iamount: amount}]);
    setSelectIngredients([...selectIngredients, {...item, iamount: amount}]);
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
        <IngredientList
          handleSelect={handleIngredientSelect}
          selectIngredients={selectIngredients}
        />
        <RecipeStep
          steps={recipeSteps}
          handleStepChange={handleStepTextChange}
          handlePlusBtnClick={handlePlusBtnClick}
          handleStepImageChange={handleStepImageChange}
          handleStepImgDelete={handleStepImgDelete}
        />
        <Center>
          <Button
            marginTop="20"
            padding="9"
            borderRadius="xl"
            onClick={handleSubmit}
          >
            <Text fontSize="xl">레시피 등록</Text>
          </Button>
        </Center>
      </Container>
    </Layout>
  );
}

export default Regist;
