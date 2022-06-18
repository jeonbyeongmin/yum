import {Box, Wrap, WrapItem} from '@chakra-ui/react';
import {getStoreItem} from 'api/store';
import StoreItem from 'components/StoreItem';
import {useEffect, useState} from 'react';
import {IStoreItem} from 'types/store';

// export interface IStoreItem {
//   id: number;
//   name: string;
//   img: string;
//   price: number;
//   company: string;
//   bookmarked: boolean;
// }

// const initData: IStoreItem[] = [
//   {
//     id: 1,
//     name: '충주 유기농 사과 1박스',
//     img: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
//     price: 12000,
//     company: '충주사과',
//     bookmarked: false,
//   },

//   {
//     id: 2,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
//   {
//     id: 3,
//     name: '충주 유기농 사과 1박스',
//     img: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
//     price: 12000,
//     company: '충주사과',
//     bookmarked: false,
//   },

//   {
//     id: 4,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
//   {
//     id: 5,
//     name: '충주 유기농 사과 1박스',
//     img: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
//     price: 12000,
//     company: '충주사과',
//     bookmarked: false,
//   },

//   {
//     id: 6,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
//   {
//     id: 7,
//     name: '충주 유기농 사과 1박스',
//     img: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
//     price: 12000,
//     company: '충주사과',
//     bookmarked: false,
//   },
//   {
//     id: 8,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
//   {
//     id: 9,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
//   {
//     id: 10,
//     name: '충주 유기농 사과 1박스',
//     img: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
//     price: 12000,
//     company: '충주사과',
//     bookmarked: false,
//   },
//   {
//     id: 11,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
//   {
//     id: 12,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
//   {
//     id: 13,
//     name: '충주 유기농 사과 1박스',
//     img: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
//     price: 12000,
//     company: '충주사과',
//     bookmarked: false,
//   },
//   {
//     id: 14,
//     name: '무항생제 계란 15구',
//     img: 'https://images.unsplash.com/photo-1623428454609-8ed6a4628b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
//     price: 3500,
//     company: '충남계촌',
//     bookmarked: false,
//   },
// ];

function StoreItemList() {
  const [data, setData] = useState<IStoreItem[]>([]);
  useEffect(() => {
    getStoreItem().then(res => {
      setData(res);
    });
  }, []);

  return (
    <Box pos="relative" my="12">
      <Wrap spacingX={7} spacingY={24}>
        {data.map(data => (
          <WrapItem key={data.docId}>
            <StoreItem data={data} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default StoreItemList;
