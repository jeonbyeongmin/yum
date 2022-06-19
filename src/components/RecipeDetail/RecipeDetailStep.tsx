import {Heading, VStack} from '@chakra-ui/react';
import React from 'react';
import {IRecipeStep} from 'types/recipe';
import StepItem from './StepItem';
interface IRecipeDetailStep {
  steps: IRecipeStep[];
}
function RecipeDetailStep({steps}: IRecipeDetailStep) {
  return (
    <VStack gap="10" alignItems="flex-start">
      <Heading>레시피</Heading>
      <VStack gap={10}>
        {steps.map(step => (
          <StepItem
            key={step.step}
            step={step.step}
            img={step.img}
            desc={step.content}
          />
        ))}
      </VStack>
    </VStack>
  );
}

export default RecipeDetailStep;
