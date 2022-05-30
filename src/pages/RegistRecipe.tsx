import {
  Box,
  Textarea,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Button,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Layout from 'components/Layout';
import React from 'react';
interface IRecistRecipe {}
import Btn from 'components/Btn';
import Ingredient from 'components/Ingredient';
function RegistRecipe({}: IRecistRecipe) {
  return (
    <Layout>
      <Container maxW="1024px">
        <CookingfInfo />
        <IngredientList />
        <RecipeStep></RecipeStep>
      </Container>
    </Layout>
  );
}
function RecipeStep() {
  return (
    <Flex flexDirection={'column'} gap={10} marginY="10">
      <RecipeStepItem step={1}></RecipeStepItem>
      <RecipeStepItem step={2}></RecipeStepItem>
      <CircleButton></CircleButton>
    </Flex>
  );
}
function CircleButton({size = '50px'}: {size?: string}) {
  return (
    <Button
      borderRadius={'50%'}
      w={size}
      h={size}
      fontSize={'30px'}
      bg="#FF9C09"
      color={'#fff'}
      margin=" 0 auto"
    >
      +
    </Button>
  );
}
function RecipeStepItem({step}: {step: number}) {
  return (
    <>
      <Heading color={'#EA900B'} size="md">
        Step{step}
      </Heading>
      <Flex h="120px">
        <Box
          flex={1}
          border="1px solid #b9b9b9"
          borderRight={'none'}
          borderLeftRadius={5}
        >
          <Textarea
            w={'100%'}
            h="100%"
            border={'none'}
            resize="none"
          ></Textarea>
        </Box>
        <Box width={'200px'} border="1px solid #b9b9b9" borderRightRadius={5}>
          <FileInput />
        </Box>
      </Flex>
    </>
  );
}
function IngredientList() {
  return (
    <Box marginY="10">
      <Heading marginY="5">재료 </Heading>
      <Flex gap={4}>
        <Ingredient
          name="사과"
          amount="1개"
          img="https://img.lovepik.com/element/40162/3354.png_860.png"
        ></Ingredient>
        <Ingredient
          name="사과"
          amount="1개"
          img="https://img.lovepik.com/element/40162/3354.png_860.png"
        ></Ingredient>
        <Ingredient
          name="사과"
          amount="1개"
          img="https://img.lovepik.com/element/40162/3354.png_860.png"
        ></Ingredient>
      </Flex>
    </Box>
  );
}
function CookingfInfo() {
  return (
    <Box marginY="10">
      <Heading marginY="5">요리정보 </Heading>
      <Grid
        h="150px"
        templateRows="repeat(3, 1fr)"
        templateColumns="1fr 1fr 200px"
      >
        <GridItem colSpan={2}>
          <InfoInput placeholder="요리의 이름을 입력해주세요." />
        </GridItem>
        <FileItemBox rowSpan={3} colSpan={1} bg="">
          <FileInput />
        </FileItemBox>
        <GridItem colSpan={2} rowSpan={2}>
          <CookingDesc
            placeholder="요리에 대해 설명해주세요.."
            resize={'none'}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
function FileInput() {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent="center"
      alignItems={'center'}
      w="100%"
      h="100%"
      gap="5"
    >
      <InfoInput type={'file'} id="fileInput" hidden />
      <label htmlFor="fileInput">완성된 요리 사진을 등록해 주세요.</label>
      <label htmlFor="fileInput">
        <Btn>사진 업로드</Btn>
      </label>
    </Flex>
  );
}

const CookingDesc = styled(Textarea)`
  font-size: 1.1rem;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 0;
  border-left: 1px solid #b9b9b9;
  border-top: 1px solid #b9b9b9;
  border-right: 0;
  border-bottom: 1px solid #b9b9b9;
  border-bottom-left-radius: 5px;
`;

const FileItemBox = styled(GridItem)`
  border: 1px solid #b9b9b9;
  gap: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const InfoInput = styled(Input)`
  font-size: 1.1rem;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 0;
  border-left: 1px solid #b9b9b9;
  border-top: 1px solid #b9b9b9;
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: 5px;
`;
export default RegistRecipe;
