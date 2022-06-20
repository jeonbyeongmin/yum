import {Checkbox, VStack, Flex, Box, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import BasketItem from 'components/BasketItem';
import Layout from 'components/Layout';
import ResultBox from 'components/ResultBox';
import React from 'react';
import {useRecoilState} from 'recoil';
import {shoppingBasketState} from 'recoil/shoppingBasket';
import {media} from 'styles/theme';
import {IBasketItem} from 'types/store';

function ShoppingBasket() {
  const [items, setItems] = useRecoilState<IBasketItem[]>(shoppingBasketState);
  console.log('shopping list', items);

  const handleCountClick = (item: IBasketItem, operation: string) => {
    const newItems = items.map(it => {
      if (it.docId === item.docId) {
        if (operation === 'plus') {
          return {
            ...it,
            count: +it.count + 1,
          };
        } else {
          return {
            ...it,
            count: +it.count - 1,
          };
        }
      } else {
        return it;
      }
    });
    setItems(newItems);
    console.log(newItems);
  };
  return (
    <Layout>
      <Box marginY="12">
        <Checkbox colorScheme="orange" defaultChecked marginX={5} size="lg">
          <Text fontSize="xl">모두 선택</Text>
        </Checkbox>
        <Container>
          <VStack flex={1} alignItems="stretch" gap={5} marginY="5">
            {items.map(data => (
              <BasketItem
                key={data.docId}
                data={data}
                handleCountClick={handleCountClick}
              />
            ))}
          </VStack>
          <ResultBox />
        </Container>
      </Box>
    </Layout>
  );
}

const Container = styled(Flex)`
  flex-direction: row;
  ${media.tablet} {
    flex-direction: column;
  }
`;

export default ShoppingBasket;
