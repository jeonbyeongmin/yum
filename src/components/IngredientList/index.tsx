import {Box, Heading, Flex, Input} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {PlusOutLineIcon} from 'components/Icon';
import Ingredient from 'components/Ingredient';

export default function IngredientList() {
  return (
    <Box marginY="10">
      <Heading size="xl" marginY="8">
        재료
      </Heading>
      <Flex gap={4}>
        <Ingredient
          name="사과"
          amount="1개"
          img="https://img.lovepik.com/element/40162/3354.png_860.png"
        />
        <Ingredient
          name="사과"
          amount="1개"
          img="https://img.lovepik.com/element/40162/3354.png_860.png"
        />
        <Ingredient
          name="사과"
          amount="1개"
          img="https://img.lovepik.com/element/40162/3354.png_860.png"
        />
        <Input type={'file'} id={`ingredientFileInput`} hidden />
        <IngredientInputLabel htmlFor={`ingredientFileInput`}>
          <PlusOutLineIcon />
        </IngredientInputLabel>
      </Flex>
    </Box>
  );
}
const IngredientInputLabel = styled(Box)`
  width: 6rem;
  height: 6rem;
  border: 1px solid #b9b9b9;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
