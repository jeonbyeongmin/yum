import {HStack, Avatar, Text} from '@chakra-ui/react';
import React from 'react';
interface IIngredientInfo {
  name: string;
  content: string;
  img?: string;
}
function IngredientInfo({name, content, img}: IIngredientInfo) {
  return (
    <HStack gap={3}>
      {img && <Avatar src={img}></Avatar>}
      <Text fontSize={'16px'} color="gray.500">
        {name}
      </Text>
      <Text fontSize={'16px'}>{content}</Text>
    </HStack>
  );
}

export default IngredientInfo;
