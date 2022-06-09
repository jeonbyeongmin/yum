import {Heading, Box, Input, Checkbox, HStack, VStack} from '@chakra-ui/react';
import Btn from 'components/Btn';
import IngredientInfo from 'components/IngredientInfo';
import React from 'react';

const IngredientCart = () => {
  return (
    <VStack
      w={'300px'}
      border="1px solid #D6D6D6"
      borderRadius={5}
      height={'fit-content'}
      minHeight={'400px'}
      alignItems="flex-start"
      p={8}
      paddingBottom="100px"
      position={'relative'}
    >
      <Heading fontSize={'2xl'}>재료</Heading>
      <VStack spacing={5}>
        <Checkbox size="lg" spacing={8} colorScheme={'orange'} defaultChecked>
          <IngredientInfo
            img="https://img-cf.kurly.com/shop/data/goodsview/20210927/gv30000229395_1.jpg"
            name="식빵"
            content="2조각"
          />
        </Checkbox>
        <Checkbox size="lg" spacing={8} colorScheme={'orange'} defaultChecked>
          <IngredientInfo
            img="https://img-cf.kurly.com/shop/data/goodsview/20210927/gv30000229395_1.jpg"
            name="식빵"
            content="2조각"
          />
        </Checkbox>
        <Checkbox size="lg" spacing={8} colorScheme={'orange'} defaultChecked>
          <IngredientInfo
            img="https://img-cf.kurly.com/shop/data/goodsview/20210927/gv30000229395_1.jpg"
            name="식빵"
            content="2조각"
          />
        </Checkbox>
      </VStack>
      <HStack position={'absolute'} bottom={5} width={'calc(100% - 4rem)'}>
        <Btn theme="orange--outline" w={'50%'}>
          장바구니
        </Btn>
        <Btn w={'50%'}>구매하기</Btn>
      </HStack>
    </VStack>
  );
};

export default IngredientCart;
