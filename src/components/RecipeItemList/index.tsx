import {Box, Flex, Heading, HStack} from '@chakra-ui/react';
import {LeftArrowIcon, RightArrowIcon} from 'components/Icon';
import RecipeItem from 'components/RecipeItem';
import Link from 'next/link';
import {RecipeData} from 'types/recipe';

interface IRecipeItemList {
  title: string;
  recipes: RecipeData[];
}

function RecipeItemList({title, recipes}: IRecipeItemList) {
  return (
    <Box pos="relative" mb={20}>
      <Heading size="xl" marginY="10" fontWeight="black">
        {title}
      </Heading>
      <HStack gap={5}>
        {recipes?.map(data => (
          <Link href={`/recipe/${data.docId}`} key={data.docId}>
            <a>
              <RecipeItem key={data.docId} data={data} />
            </a>
          </Link>
        ))}
      </HStack>
      <Flex>
        <Box pos="absolute" top="35%" left={-8}>
          <LeftArrowIcon />
        </Box>
        <Box pos="absolute" top="35%" right={-8}>
          <RightArrowIcon />
        </Box>
      </Flex>
    </Box>
  );
}

export default RecipeItemList;
