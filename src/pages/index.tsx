import type { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import RecipeItemList from "components/RecipeItemList";

const Home: NextPage = () => {
  return (
    <Layout>
      <RecipeItemList title={"내가 팔로잉한 유저들의 레시피"} />
      <RecipeItemList title={"최근 레시피"} />
    </Layout>
  );
};

const Text = styled.div``;

export default Home;
