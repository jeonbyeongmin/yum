import {Box, Flex, Heading, HStack, IconButton} from '@chakra-ui/react';
import {LeftArrowIcon, RightArrowIcon} from 'components/Icon';
import RecipeItem from 'components/RecipeItem';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {RecipeData} from 'types/recipe';

interface IRecipeItemList {
  title: string;
  recipes: RecipeData[];
}

function RecipeItemList({title, recipes}: IRecipeItemList) {
  const [margin, setMargin] = useState(0);
  const [current, setCurrent] = useState(1);
  const [leftHidden, setLeftHidden] = useState(true);
  const [rightHidden, setRightHidden] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const handleLeftArrow = () => {
    setMargin(prev => prev + 1039);
    setCurrent(prev => prev - 1);
  };

  const handleRightArrow = () => {
    setMargin(prev => prev - 1039);
    setCurrent(prev => prev + 1);
  };

  useEffect(() => {
    margin < 0 ? setLeftHidden(false) : setLeftHidden(true);
  }, [margin]);

  useEffect(() => {
    current > recipes?.length / 4 ? setIsLast(true) : setIsLast(false);
    if (!recipes) setIsLast(true);
  }, [current, recipes]);

  useEffect(() => {
    isLast ? setRightHidden(true) : setRightHidden(false);
  }, [isLast]);

  const router = useRouter();

  return (
    <Box pos="relative" mb={20}>
      <Heading size="xl" marginY="10" fontWeight="black">
        {title}
      </Heading>
      <Box overflow="hidden">
        <HStack
          gap={'15px'}
          maxWidth="1024px"
          marginLeft={margin}
          transition="ease 0.5s"
        >
          {recipes?.map(data => (
            <RecipeItem
              key={data.docId}
              data={data}
              handleRouter={() => router.push(`/recipe/${data.docId}`)}
            />
          ))}
        </HStack>
      </Box>
      <Flex>
        <IconButton
          aria-label="left arrow"
          hidden={leftHidden}
          icon={<LeftArrowIcon />}
          pos="absolute"
          top="35%"
          left={-8}
          _focus={{border: 'none'}}
          onClick={handleLeftArrow}
          variant="unstyled"
        />
        <IconButton
          aria-label="right arrow"
          hidden={rightHidden}
          icon={<RightArrowIcon />}
          pos="absolute"
          top="35%"
          right={-8}
          _focus={{border: 'none'}}
          onClick={handleRightArrow}
          variant="unstyled"
        />
      </Flex>
    </Box>
  );
}

export default RecipeItemList;
