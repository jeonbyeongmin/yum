import {Box, Wrap} from '@chakra-ui/react';
import StoreItem from 'components/StoreItem';
import Link from 'next/link';
import {IStoreItem} from 'types/store';

interface IStoreItemList {
  items: IStoreItem[];
}

function StoreItemList({items}: IStoreItemList) {
  return (
    <Box pos="relative" my="12">
      <Wrap spacingX={7} spacingY={24}>
        {items.map(item => (
          <Link href={`/store/${item.docId}`} key={item.docId}>
            <a>
              <StoreItem data={item} />
            </a>
          </Link>
        ))}
      </Wrap>
    </Box>
  );
}

export default StoreItemList;
