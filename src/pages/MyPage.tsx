import Layout from "components/Layout";
import MyInfo from "components/MyInfo";
import RecipeItemList from "components/RecipeItemList";

function MyPage() {
  return (
    <Layout>
      <MyInfo />
      <RecipeItemList title={"북마크한 레시피"} />
      <RecipeItemList title={"내가 등록한 레시피"} />
    </Layout>
  );
}

export default MyPage;
