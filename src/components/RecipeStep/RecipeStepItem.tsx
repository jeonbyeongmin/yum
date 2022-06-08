import {Heading, Flex, Box, Textarea, Input} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Btn from 'components/Btn';
import React from 'react';

function RecipeStepItem({
  step,
  value,
  handleStepTextChange,
}: {
  step: number;
  value: string;
  handleStepTextChange: any;
}) {
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
            // value={value}
            onChange={handleStepTextChange}
          />
        </Box>
        <Box width={'200px'} border="1px solid #b9b9b9" borderRightRadius={5}>
          <FileInput step={step} />
        </Box>
      </Flex>
    </>
  );
}
function FileInput({step}: {step: number}) {
  return (
    <Flex flexDirection={'column'} justifyContent="center" w="100%" h="100%">
      <InfoInput type={'file'} id={`recipeImgInput${step}`} hidden />
      <RecipeImgInputLabel htmlFor={`recipeImgInput${step}`}>
        <Btn>사진 업로드</Btn>
      </RecipeImgInputLabel>
    </Flex>
  );
}

const RecipeImgInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  &::before {
    content: '요리 사진을 등록해 주세요.';
  }
`;
const InfoInput = styled(Input)`
  font-size: 1.1rem;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-top-left-radius: 5px;
`;

export default RecipeStepItem;
