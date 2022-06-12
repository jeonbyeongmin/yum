import {Flex, Heading, Button} from '@chakra-ui/react';
import {ChangeEvent} from 'react';
import {IRecipeStep} from 'types/recipe';
import RecipeStepItem from './RecipeStepItem';

interface ICookingInfoPage {
  steps: IRecipeStep[];
  handleStepChange: (value: string, step: number) => void;
  handlePlusBtnClick: () => void;
  handleStepImageChange: (e: ChangeEvent, step: number) => void;
  handleStepImgDelete: (step: number) => void;
}
export default function RecipeStep({
  steps,
  handleStepChange,
  handlePlusBtnClick,
  handleStepImageChange,
  handleStepImgDelete,
}: ICookingInfoPage) {
  return (
    <Flex flexDirection={'column'} gap={10} marginY="10">
      <Heading size="lg" marginY="5">
        레시피 순서
      </Heading>
      {steps.map((stepInfo: IRecipeStep) => (
        <RecipeStepItem
          key={stepInfo.step}
          step={stepInfo.step}
          value={stepInfo.content}
          img={stepInfo.img}
          handleStepImageChange={handleStepImageChange}
          handleStepTextChange={e =>
            handleStepChange(e.target.value, stepInfo.step)
          }
          handleImgDelete={handleStepImgDelete}
        />
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
