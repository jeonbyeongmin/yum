import Layout from 'components/Layout';
import RecipeItemList from 'components/RecipeItemList';
import PopularRecipeItemList from 'components/PopularRecipeList';
import {getFollowRecipes, getLikedRecipes, getRecentRecipes} from 'api/recipe';
import {RecipeData} from 'types/recipe';

interface IHome {
  data: {
    follow: RecipeData[];
    recent: RecipeData[];
    liked: RecipeData[];
  };
}

function Home({data}: IHome) {
  return (
    <Layout>
      <RecipeItemList
        title={'내가 팔로잉한 유저들의 레시피'}
        recipes={data.follow}
      />
      <RecipeItemList title={'최근 레시피'} recipes={data.recent} />
      <PopularRecipeItemList title={'인기 레시피'} recipes={data.liked} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const follow = await getFollowRecipes();
  const recent = await getRecentRecipes();
  const liked = await getLikedRecipes();

  return {
    props: {
      data: {follow, recent, liked},
    },
  };
}

export default Home;
