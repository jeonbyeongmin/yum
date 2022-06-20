import {Flex, VStack, Box} from '@chakra-ui/react';
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
    getRecipe('XFQWQyQS6vBcJxhktuAo').then(res => {
      console.log('res', res);
      setInfo(res as IRecipeInfo);
    });
  }, []);

  return (
    <Layout>
      {info ? (
        <Flex gap={10} p={5} w="70%">
          <VStack flex={1} alignItems=" flex-start" gap={10}>
            <RecipeInfo info={info.cookingInfo} imgs={info.cookingImgs}>
              <WriterInfo />
            </RecipeInfo>
            <Box py={10}>
              <RecipeDetailStep steps={info.steps} />
            </Box>
          </VStack>
          {/* TODO 재료 부분과 같이, 장바구니 부분 */}
          <Box>
            <IngredientCart />
          </Box>
        </Flex>
      ) : (
        <>loading..</>
      )}
    </Layout>
  );
}

export default Detail;
