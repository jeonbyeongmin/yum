import {HStack, Avatar, Text} from '@chakra-ui/react';
import React from 'react';
interface IIngredientInfo {
  name: string;
  content: string;
  img?: string;
}
function IngredientInfo({name, content, img}: IIngredientInfo) {
  return (
    <HStack>
      {img && <Avatar></Avatar>}
      <Text minWidth={'100px'}>{name}</Text>
      <Text>{content}</Text>
    </HStack>
  );
}

export default IngredientInfo;
