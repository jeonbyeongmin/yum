import {Heading, Flex, Box, Textarea, Input} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import ImageFileInput from './ImageFileInput';
interface RecipeStepItem {
  step: number;
  value: string;
  handleStepTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}
function RecipeStepItem({step, value, handleStepTextChange}: RecipeStepItem) {
  return (
    <>
      <Heading color={'#EA900B'} size="md">
        Step{step + 1}
      </Heading>
      <Flex h="150px">
        <Box
          flex={1}
          border="1px solid #b9b9b9"
          borderRight={'none'}
          borderLeftRadius={5}
        >
          <Textarea
            w={'100%'}
            h="100%"
            border={'none'}
            resize="none"
            p={5}
            value={value}
            onChange={handleStepTextChange}
          />
        </Box>
        <Box width={'200px'} border="1px solid #b9b9b9" borderRightRadius={5}>
          <ImageFileInput step={step} />
        </Box>
      </Flex>
    </>
  );
}

export default RecipeStepItem;
