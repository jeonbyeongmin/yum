import {Flex, Input} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, {ChangeEvent} from 'react';

function ImageFileInput({
  step,
  handleStepImageChange,
}: {
  step: number;
  handleStepImageChange: (e: ChangeEvent, step: number) => void;
}) {
  return (
    <Flex flexDirection={'column'} justifyContent="center" w="100%" h="100%">
      <InfoInput
        type="file"
        id={`recipeImgInput${step}`}
        onChange={e => handleStepImageChange(e, step)}
        hidden
      />
      <RecipeImgInputLabel htmlFor={`recipeImgInput${step}`}>
        사진 업로드
      </RecipeImgInputLabel>
    </Flex>
  );
}
const RecipeImgInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
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

export default ImageFileInput;
