import {Avatar, Flex, Text} from '@chakra-ui/react';
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
      <Avatar name={name} src={img} size={'xl'} />
      <Text fontWeight={600}>{name}</Text>
      <Text fontWeight={600}>{amount}</Text>
    </Flex>
  );
};

export default Ingredient;
