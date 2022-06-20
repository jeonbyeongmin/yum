import {HStack, Avatar, Text} from '@chakra-ui/react';
import React from 'react';
interface IIngredientInfo {
  name: string;
  content: string;
  img?: string;
}
function IngredientInfo({name, content, img}: IIngredientInfo) {
  return (
    <HStack gap={5} width="100%">
      {img && <Avatar src={img}></Avatar>}
      <Text fontSize={'xl'} minWidth={'60px'}>
        {name}
      </Text>
      {/* <Text fontSize={'xl'}>{content}</Text> */}
    </HStack>
  );
}

export default IngredientInfo;
