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
  Image,
  Avatar,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Layout from 'components/Layout';
import React from 'react';
import Ingredient from 'components/Ingredient';
import {PlusOutLineIcon} from 'components/Icon';
import CookingInfo from 'components/CookingInfo';
import {IngredientList} from 'components/FileList';

interface IRecistRecipe {}
function RegistRecipe({}: IRecistRecipe) {
  return (
    <Layout>
      <Container maxW="1024px">
        <CookingInfo />
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
          {/* <FileInput /> */}
        </Box>
      </Flex>
    </>
  );
}

export default RegistRecipe;
