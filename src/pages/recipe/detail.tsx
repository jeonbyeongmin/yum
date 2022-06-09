import {Box, Flex, Image, VStack, Text, HStack, Avatar} from '@chakra-ui/react';
import Btn from 'components/Btn';
import Layout from 'components/Layout';
import RecipeDetailStep from 'components/RecipeDetailStep';
import RecipeInfo from 'components/RecipeInfo';
import React from 'react';

function Detail() {
  return (
    <Layout>
      <Flex gap={5} p={5}>
        <VStack flex={1} alignItems=" flex-start">
          <RecipeInfo />
          <RecipeDetailStep />
        </VStack>
        <VStack
          w={'320px'}
          border="1px solid #D6D6D6"
          borderRadius={5}
          height={'fit-content'}
          minHeight={'400px'}
        >
          sad
        </VStack>
      </Flex>
    </Layout>
  );
}

export default Detail;
