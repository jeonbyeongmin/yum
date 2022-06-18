import {Box, Button, Center, Heading, Wrap, WrapItem} from '@chakra-ui/react';
import RecipeItem from 'components/RecipeItem';
import {IRecipeItem} from 'types/recipe';

interface IRecipeItemList {
  title: string;
  recipes: IRecipeItem[];
}
// export interface IRecipeItem {
//   id: number;
//   name: string;
//   desc: string;
//   img: string;
//   userName: string;
//   userImg: string;
//   likeCount: number;
//   liked: boolean;
//   bookmarked: boolean;
// }

// const initData: IRecipeItem[] = [
//   {
//     id: 1,
//     name: '숯불 바베큐 꼬치',
//     desc: '숯불로 구운 바베큐 꼬치입니다.',
//     img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
//   {
//     id: 2,
//     name: '수제 베이컨 치즈 버거',
//     desc: '군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.',
//     img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
//   {
//     id: 3,
//     name: '숯불 바베큐 꼬치',
//     desc: '숯불로 구운 바베큐 꼬치입니다.',
//     img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
//   {
//     id: 4,
//     name: '수제 베이컨 치즈 버거',
//     desc: '군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.',
//     img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
//   {
//     id: 5,
//     name: '숯불 바베큐 꼬치',
//     desc: '숯불로 구운 바베큐 꼬치입니다.',
//     img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
//   {
//     id: 6,
//     name: '수제 베이컨 치즈 버거',
//     desc: '군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.',
//     img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
//   {
//     id: 7,
//     name: '숯불 바베큐 꼬치',
//     desc: '숯불로 구운 바베큐 꼬치입니다.',
//     img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
//   {
//     id: 8,
//     name: '수제 베이컨 치즈 버거',
//     desc: '군침이 뚝뚝 떨어지는 수제 베이컨 치즈 버거입니다.',
//     img: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2440&q=80',
//     userName: '정균이',
//     userImg: '',
//     likeCount: 3,
//     liked: false,
//     bookmarked: false,
//   },
// ];

function PopularRecipeItemList({title, recipes}: IRecipeItemList) {
  return (
    <Box pos="relative" mb={20}>
      <Heading size="xl" marginY="10" fontWeight="black">
        {title}
      </Heading>
      <Wrap spacingX={7} spacingY={14}>
        {recipes?.map(data => (
          <WrapItem key={data.id}>
            <RecipeItem data={data} />
          </WrapItem>
        ))}
      </Wrap>
      <Center my={20}>
        <Button size="lg" height="45px" width="150px">
          더 보기
        </Button>
      </Center>
    </Box>
  );
}

export default PopularRecipeItemList;
