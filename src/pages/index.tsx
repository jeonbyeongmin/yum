import type { NextPage } from "next";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import RecipeItemList from "components/RecipeItemList";

const Home: NextPage = () => {
  return (
    <Layout>
      <RecipeItemList title={"추천 레시피"} />
    </Layout>
  );
};

const Text = styled.div``;

export default Home;
