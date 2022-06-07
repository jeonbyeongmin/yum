import {
  Flex,
  Heading,
  Button,
  Box,
  Textarea,
  Input,
  Text,
} from '@chakra-ui/react';
import Btn from 'components/Btn';
import styled from '@emotion/styled';

export default function RecipeStep() {
  return (
    <Flex flexDirection={'column'} gap={10} marginY="10">
      <Heading size="lg" marginY="5">
        레시피 순서{' '}
      </Heading>

      <RecipeStepItem step={1}></RecipeStepItem>
      <RecipeStepItem step={2}></RecipeStepItem>
      <Button
        borderRadius={'50%'}
        w={'50px'}
        h={'50px'}
        fontSize={'30px'}
        bg="#FF9C09"
        color={'#fff'}
        margin=" 0 auto"
      >
        +
      </Button>
    </Flex>
  );
}
function RecipeStepItem({step}: {step: number}) {
  return (
    <>
      <Heading color={'#EA900B'} size="md">
        Step{step}
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
          ></Textarea>
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
    content: '완성된 요리 사진을 등록해 주세요.';
  }
`;
const InfoInput = styled(Input)`
  font-size: 1.1rem;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 0;
  border-left: 1px solid #b9b9b9;
  border-top: 1px solid #b9b9b9;
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: 5px;
`;
