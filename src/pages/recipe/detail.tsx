import {Flex, VStack} from '@chakra-ui/react';
import Layout from 'components/Layout';
import IngredientCart from 'components/RecipeDetail/IngredientCart';
import RecipeDetailStep from 'components/RecipeDetail/RecipeDetailStep';
import RecipeInfo from 'components/RecipeDetail/RecipeInfo';
import WriterInfo from 'components/RecipeDetail/WriterInfo';
import React, {useEffect, useState} from 'react';
import {getRecipe} from 'api/recipe';
import {IRecipeInfo} from 'types/recipe';

function Detail() {
  const [info, setInfo] = useState<IRecipeInfo>();
  useEffect(() => {
    getRecipe('tsBu15LhoJFVer94as9N').then(res => {
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
          {/* TODO 재료 부분과 같이, 장바구니 부분 */}
          <IngredientCart />
        </Flex>
      ) : (
        <></>
      )}
    </Layout>
  );
}

export default Detail;
