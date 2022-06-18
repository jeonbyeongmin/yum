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
      <VStack gap={10} paddingY={10}>
        {steps.map((step, i) => (
          <StepItem
            key={step.step}
            step={step.step}
            img={step.img}
            desc={step.content}
          />
        ))}
        {/* <StepItem
          step={0}
          img={
            'https://user-images.githubusercontent.com/49177223/172919068-52729d56-1a3b-4f92-8ffa-e4c77d94f4a6.png'
          }
          desc={'계란과 버터 준비'}
        />
        <StepItem
          step={1}
          img={
            'https://user-images.githubusercontent.com/49177223/172919068-52729d56-1a3b-4f92-8ffa-e4c77d94f4a6.png'
          }
          desc={'계란과 버터 준비'}
        />
        <StepItem
          step={2}
          img={
            'https://user-images.githubusercontent.com/49177223/172919068-52729d56-1a3b-4f92-8ffa-e4c77d94f4a6.png'
          }
          desc={'계란과 버터 준비'}
        /> */}
      </VStack>
    </>
  );
}

export default RecipeDetailStep;
