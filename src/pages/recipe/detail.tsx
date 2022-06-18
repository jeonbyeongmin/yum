import {Flex, InputLeftAddon, VStack} from '@chakra-ui/react';
import Layout from 'components/Layout';
import IngredientCart from 'components/RecipeDetail/IngredientCart';
import RecipeDetailStep from 'components/RecipeDetail/RecipeDetailStep';
import RecipeInfo from 'components/RecipeDetail/RecipeInfo';
import WriterInfo from 'components/RecipeDetail/WriterInfo';
// import CookingInfo from 'components/RecipeDetail/CookingInfo';
import React, {useEffect, useState} from 'react';
import {getRecipe} from 'api/recipe';
import {IRecipeInfo, IRecipeRegist} from 'types/recipe';

function Detail() {
  const [info, setInfo] = useState<IRecipeInfo>();
  useEffect(() => {
    getRecipe().then(res => {
      console.log('res', res);
      setInfo(res as IRecipeInfo);
    });
  }, []);

  return (
    <Layout>
      {info ? (
        <Flex gap={10} p={5}>
          <VStack flex={1} alignItems=" flex-start" gap={10}>
            <RecipeInfo info={info.cookingInfo} imgs={info.cookingImgs}>
              <WriterInfo />
            </RecipeInfo>
            <RecipeDetailStep steps={info.steps} />
          </VStack>
          <IngredientCart />
        </Flex>
      ) : (
        <></>
      )}
    </Layout>
  );
}

export default Detail;
