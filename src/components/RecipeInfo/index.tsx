import {VStack, Box, Text, Image} from '@chakra-ui/react';
import React from 'react';
import WriterInfo from './WriterInfo';
import CookingInfo from './CookingInfo';

const RecipeInfo = () => {
  return (
    <VStack flex={1} alignItems=" flex-start">
      <Box borderRadius={5} overflow="hidden">
        <Image
          src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/18/32775e06923a4bef0cb6093ff84d28ef1.jpg"
          alt=""
        />
      </Box>
      <VStack alignItems={'flex-start'} paddingY={10} gap={3}>
        <Text fontSize={'2xl'} fontWeight="700">
          백종원 에그 샌드위치
        </Text>
        <Text fontSize={'lg'} lineHeight="normal">
          백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원
          에그 샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그
          샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그
          샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그
          샌드위치백종원 에그 샌드위치
        </Text>
      </VStack>
      <WriterInfo />
      {/* 이거 이름 겹치는데 어떻게 하는게 좋을까여 components/CookingInfo에 있어요*/}
      <CookingInfo />
    </VStack>
  );
};

export default RecipeInfo;