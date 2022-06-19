import {Box, Text, VStack, Flex, Avatar, chakra} from '@chakra-ui/react';
import {BookmarkIcon, LikeIcon} from 'components/Icon';
import NextImage from 'next/image';
import {useState} from 'react';
import {RecipeData} from 'types/recipe';

interface IRecipeData {
  data: RecipeData;
}

function RecipeItem({data}: IRecipeData) {
  const [liked, setLiked] = useState<boolean>(data.isLiked);
  const [likeCount, setLikeCount] = useState<number>(data.likeCount);
  const [bookmarked, setBookmarked] = useState<boolean>(data.isBookmarked);

  const likeClick = () => {
    setLiked(!liked);
    liked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

  const bookmarkClick = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <VStack>
      <Box overflow="hidden" cursor="pointer" borderRadius="xl">
        <ProductImage
          src={data.img}
          width={'240px'}
          height={'240px'}
          objectFit={'cover'}
          transition="all 0.2s"
          _hover={{
            transform: 'scale(1.1)',
          }}
          alt="food"
        />
      </Box>
      <Box p={3} width={'240px'}>
        <Flex justifyContent="space-between">
          <Flex alignItems="center">
            <Box cursor={'pointer'} onClick={likeClick}>
              <LikeIcon activate={liked} />
            </Box>
            <Text fontSize="xl" color="gray.500" ml={2}>
              {likeCount}
            </Text>
          </Flex>
          <Box cursor={'pointer'} onClick={bookmarkClick}>
            <BookmarkIcon activate={bookmarked} />
          </Box>
        </Flex>
        <Text
          mt="5"
          fontWeight="semibold"
          fontSize="2xl"
          lineHeight="tight"
          transition="all 0.2s"
          cursor="pointer"
          _hover={{opacity: '0.6'}}
        >
          {data.name}
        </Text>
        <Text mt="5" color="gray.500" noOfLines={2} fontSize="xl" minH="25px">
          {data.desc}
        </Text>

        <Flex mt="5" alignItems="center">
          <Avatar src={data.userImg} width={'20px'} height={'20px'} />
          <Text ml="4" fontSize="lg" color="gray.500">
            {data.userName}
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
}

const ProductImage = chakra(NextImage, {
  baseStyle: {maxH: 120, maxW: 120},
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
});

export default RecipeItem;
