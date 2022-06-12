import {
  Heading,
  Flex,
  Box,
  Textarea,
  Image,
  CloseButton,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, {ChangeEvent} from 'react';
import ImageFileInput from './ImageFileInput';
interface RecipeStepItem {
  step: number;
  value: string;
  img: string;
  handleStepTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleStepImageChange: (e: ChangeEvent, step: number) => void;
  handleImgDelete: (step: number) => void;
}
function RecipeStepItem({
  step,
  value,
  img,
  handleStepTextChange,
  handleStepImageChange,
  handleImgDelete,
}: RecipeStepItem) {
  return (
    <>
      <Heading color={'#EA900B'} size="md">
        Step{step + 1}
      </Heading>
      <Flex h="150px" flexWrap={'wrap'}>
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
          {img ? (
            <Box position={'relative'} flex={1}>
              <Image src={img} alt="img" w={'100%'} h={'100%'} />
              <DeleteBtn onClick={() => handleImgDelete(step)} />
            </Box>
          ) : (
            <ImageFileInput
              handleStepImageChange={handleStepImageChange}
              step={step}
            />
          )}
        </Box>
      </Flex>
    </>
  );
}
const DeleteBtn = styled(CloseButton)`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: orange;
  color: #fff;
  border-radius: 50%;
  font-size: 8px;
  width: 18px;
  height: 18px;
`;
export default RecipeStepItem;
