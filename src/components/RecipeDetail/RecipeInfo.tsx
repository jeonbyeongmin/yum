import {Box, Text, Image} from '@chakra-ui/react';
import React from 'react';

const RecipeInfo = () => {
  return (
    <>
      <Box borderRadius={5} overflow="hidden">
        <Image
          src="https://recipe1.ezmember.co.kr/cache/recipe/2020/08/18/32775e06923a4bef0cb6093ff84d28ef1.jpg"
          alt=""
        />
      </Box>
      <Box>
        <Text fontSize={'2xl'} fontWeight="700" paddingY={5}>
          백종원 에그 샌드위치
        </Text>
        <Text fontSize={'lg'} lineHeight="normal">
          백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원
          에그 샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그
          샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그
          샌드위치백종원 에그 샌드위치백종원 에그 샌드위치백종원 에그
          샌드위치백종원 에그 샌드위치
        </Text>
      </Box>
    </>
  );
};

export default RecipeInfo;
