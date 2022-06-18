import {Box, Heading, Flex} from '@chakra-ui/react';
import Ingredient from 'components/Ingredient';
import IngredientSelectModal from 'components/IngredientSelectModal';
import {useState} from 'react';
import {IStoreItem} from 'types/store';
interface IIngredientList {
  handleSelect: (item: IStoreItem) => void;
  selectIngredients: IStoreItem[];
}
export default function IngredientList({
  selectIngredients,
  handleSelect,
}: IIngredientList) {
  return (
    <Box marginY="10">
      <Heading size="xl" marginY="8">
        재료
      </Heading>
      <IngredientSelectModal handleSelect={handleSelect} />

      <Flex gap={4}>
        {selectIngredients?.map((item: IStoreItem) => (
          <Ingredient
            key={item.name}
            name={item.name}
            amount="1개"
            img={item.img}
          />
        ))}
      </Flex>
    </Box>
  );
}
