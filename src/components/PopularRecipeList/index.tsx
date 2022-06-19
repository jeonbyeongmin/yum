import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import RecipeItem from 'components/RecipeItem';
import {RecipeData} from 'types/recipe';

interface IRecipeItemList {
  title: string;
  recipes: RecipeData[];
}

function PopularRecipeItemList({title, recipes}: IRecipeItemList) {
  return (
    <Box pos="relative" mb={20}>
      <Heading size="xl" marginY="10" fontWeight="black">
        {title}
      </Heading>
      <Wrap spacingX={7} spacingY={14}>
        {recipes?.map(data => (
          <WrapItem key={data.docId}>
            <RecipeItem data={data} />
          </WrapItem>
        ))}
      </Wrap>
      <Center my={20}>
        <Button size="xl" paddingX="14" paddingY="6" borderRadius="xl">
          <Text fontSize="xl">더 보기</Text>
        </Button>
      </Center>
    </Box>
  );
}

export default PopularRecipeItemList;
