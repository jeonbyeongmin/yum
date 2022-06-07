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
import {useEffect, useState} from 'react';
import {IRecipeInfo, IRecipeStep} from 'types/recipe';
interface ICookingInfoPage {
  handleStepChange: (newStep: IRecipeStep[]) => void;
  info: IRecipeInfo;
}
export default function RecipeStep({handleStepChange, info}: ICookingInfoPage) {
  useEffect(() => {
    console.log('info', info);
  }, [info]);

  const handlePlusBtnClick = () => {
    const _steps = [
      ...info.steps,
      {
        step: info.steps.length,
        content: '',
        img: '',
      },
    ];
    handleStepChange(_steps);
  };

  const handleStepTextChange = (e: any, step: number) => {
    const newSteps = [...info.steps];
    newSteps[step] = {
      ...newSteps[step],
      content: e.target.value,
    };
    handleStepChange(newSteps);
  };

  return (
    <Flex flexDirection={'column'} gap={10} marginY="10">
      <Heading size="lg" marginY="5">
        레시피 순서
      </Heading>
      {info.steps.map((stepInfo: IRecipeStep) => (
        <RecipeStepItem
          key={stepInfo.step}
          step={stepInfo.step}
          value={stepInfo.content}
          handleStepTextChange={e => handleStepTextChange(e, stepInfo.step)}
        ></RecipeStepItem>
      ))}
      
      <Button
        borderRadius={'50%'}
        w={'50px'}
        h={'50px'}
        fontSize={'30px'}
        bg="#FF9C09"
        color={'#fff'}
        margin=" 0 auto"
        onClick={handlePlusBtnClick}
      >
        +
      </Button>
    </Flex>
  );
}
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
            p={5}
            // value={value}
            onChange={handleStepTextChange}
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
