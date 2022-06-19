import {Box, Wrap, WrapItem} from '@chakra-ui/react';
import StoreItem from 'components/StoreItem';
import {IStoreItem} from 'types/store';

interface IStoreItemList {
  items: IStoreItem[];
}

function StoreItemList({items}: IStoreItemList) {
  return (
    <Box pos="relative" my="12">
      <Wrap spacingX={7} spacingY={24}>
        {items.map(item => (
          <WrapItem key={item.docId}>
            <StoreItem data={item} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default StoreItemList;
