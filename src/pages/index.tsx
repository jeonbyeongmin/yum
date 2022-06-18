import type {NextPage} from 'next';
import styled from '@emotion/styled';
import Layout from 'components/Layout';
import RecipeItemList from 'components/RecipeItemList';
import PopularRecipeItemList from 'components/PopularRecipeList';
import {getRecentRecipes} from 'api/recipe';
import {useEffect} from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    getRecentRecipes();
  }, []);

  return (
    <Layout>
      <RecipeItemList title={'내가 팔로잉한 유저들의 레시피'} />
      <RecipeItemList title={'최근 레시피'} />
      <PopularRecipeItemList title={'인기 레시피'} />
    </Layout>
  );
};

export default Home;
