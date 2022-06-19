import {Box, Flex, Image, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

type IIngredient = {
  name: string;
  amount: string;
  img: string;
};

const Ingredient = ({name, amount, img}: IIngredient) => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <ImageFileInputWrapper borderRadius="xl" overflow="hidden">
        <Image
          src={img}
          alt="ingredient"
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
        />
      </ImageFileInputWrapper>
      <Text fontWeight={600}>{name}</Text>
      <Text fontWeight={600}>{amount}</Text>
    </Flex>
  );
};

const ImageFileInputWrapper = styled(Box)`
  width: 70px;
  height: 70px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default Ingredient;
