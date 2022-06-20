import {Heading, Button, Checkbox, HStack, VStack} from '@chakra-ui/react';
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
      position={'fixed'}
    >
      <Heading fontSize={'2xl'} mb={5}>재료</Heading>
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
        <Button colorScheme='orange' variant='outline' height={"40px"} width={"50%"} fontSize="xl">
          장바구니
        </Button>
        <Button colorScheme={"orange"} height={"40px"} width="50%" fontSize="xl">구매하기</Button>
      </HStack>
    </VStack>
  );
};

export default IngredientCart;
