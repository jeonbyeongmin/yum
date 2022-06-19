import {Box, Heading, Flex} from '@chakra-ui/react';
import Ingredient from 'components/Ingredient';
import IngredientSelectModal from 'components/IngredientSelectModal';
import {IIngredientItem, IStoreItem} from 'types/store';
interface IIngredientList {
  handleSelect: (item: IStoreItem, amount: string) => void;
  selectIngredients: IIngredientItem[];
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

      <Flex gap={4}>
        {selectIngredients?.map((item: IIngredientItem) => (
          <Ingredient
            key={item.name}
            name={item.name}
            amount={item.iamount}
            img={item.img}
          />
        ))}

        <IngredientSelectModal handleSelect={handleSelect} />
      </Flex>
    </Box>
  );
}
