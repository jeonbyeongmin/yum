import {Heading, VStack} from '@chakra-ui/react';
import React from 'react';
import {IRecipeStep} from 'types/recipe';
import StepItem from './StepItem';
interface IRecipeDetailStep {
  steps: IRecipeStep[];
}
function RecipeDetailStep({steps}: IRecipeDetailStep) {
  return (
    <>
      <Heading>레시피</Heading>
      <VStack gap={16} paddingY={10} alignItems="flex-start">
        {steps.map(({step, img, content}: IRecipeStep) => (
          <StepItem key={step} step={step} img={img} desc={content} />
        ))}
      </VStack>
    </>
  );
}

export default RecipeDetailStep;
