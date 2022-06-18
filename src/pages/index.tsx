import type {NextPage} from 'next';
// import styled from '@emotion/styled';
import Layout from 'components/Layout';
import RecipeItemList from 'components/RecipeItemList';
import PopularRecipeItemList from 'components/PopularRecipeList';
import {getLikedRecipes, getRecentRecipes} from 'api/recipe';
import {useEffect, useState} from 'react';
import {IRecipeItem} from 'types/recipe';

const Home: NextPage = () => {
  const [recentRecipes, setRecentRecipes] = useState<IRecipeItem[]>([]);
  const [likedRecipes, setLikedRecipes] = useState<IRecipeItem[]>([]);
  useEffect(() => {
    getRecentRecipes().then(res => {
      setRecentRecipes(res);
    });
    getLikedRecipes().then(res => {
      setLikedRecipes(res);
    });
  }, []);
  return (
    <Layout>
      <RecipeItemList title={'내가 팔로잉한 유저들의 레시피'} />
      <RecipeItemList title={'최근 레시피'} recipes={recentRecipes} />
      <PopularRecipeItemList title={'인기 레시피'} recipes={likedRecipes} />
    </Layout>
  );
};

export default Home;
