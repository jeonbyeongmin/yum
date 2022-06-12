import {Flex, Spinner, VStack} from '@chakra-ui/react';
import Layout from 'components/Layout';
import IngredientCart from 'components/RecipeDetail/IngredientCart';
import RecipeDetailStep from 'components/RecipeDetail/RecipeDetailStep';
import RecipeInfo from 'components/RecipeDetail/RecipeInfo';
import WriterInfo from 'components/RecipeDetail/WriterInfo';
import CookingInfo from 'components/RecipeDetail/CookingInfo';
import React, {useEffect, useState} from 'react';
import {getRecipe} from 'api/recipe';
import Loading from 'components/Loading';
import SingleSlider from 'components/Slider/single';
import {IRecipeInfo} from 'types/recipe';
const dummyDocId = 'JcvsjwvpnHYXzMIVX5Kh';
function Detail() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recipe, setRecipe] = useState<IRecipeInfo>();
  useEffect(() => {
    getRecipe(dummyDocId).then(res => {
      setRecipe(res);
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    console.log('recipe', recipe);
  }, [recipe]);
  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        recipe && (
          <Flex gap={10} p={5}>
            <VStack flex={1} alignItems=" flex-start" gap={10}>
              <RecipeInfo />
              <WriterInfo />
              <CookingInfo />
              <RecipeDetailStep />
            </VStack>
            <IngredientCart />
          </Flex>
        )
      )}
    </Layout>
  );
}

export default Detail;
