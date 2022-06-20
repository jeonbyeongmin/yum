import {HStack, Avatar, Text, Flex} from '@chakra-ui/react';
import React from 'react';
interface IIngredientInfo {
  name: string;
  content: string;
  img?: string;
}
function IngredientCartItem({name, content, img}: IIngredientInfo) {
  return (
    <Flex gap={3} height={'30px'}>
      <Avatar src={img}></Avatar>
      <Text fontSize={'16px'} color="gray.500" lineHeight={'30px'}>
        {name}
      </Text>
      {/* <Text fontSize={'16px'}>{content}</Text> */}
    </Flex>
  );
}

export default IngredientCartItem;
