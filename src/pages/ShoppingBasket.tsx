import {Checkbox, VStack, Flex, Box, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import BasketItem from 'components/BasketItem';
import Layout from 'components/Layout';
import ResultBox from 'components/ResultBox';
import React from 'react';
import {media} from 'styles/theme';

export interface IProductItem {
  id: number;
  name: string;
  delivery: number | undefined;
  count: number;
  checked: boolean;
  price: number;
}

const initData: IProductItem[] = [
  {
    id: 1,
    name: ' 충주 유기농 사과 10개입',
    delivery: undefined,
    count: 1,
    checked: false,
    price: 5000,
  },
  {
    id: 2,
    name: ' 충주 유기농 사과 10개입',
    delivery: undefined,
    count: 1,
    checked: false,
    price: 5000,
  },
  {
    id: 3,
    name: ' 충주 유기농 사과 10개입',
    delivery: undefined,
    count: 1,
    checked: false,
    price: 5000,
  },
];

function ShoppingBasket() {
  return (
    <Layout>
      <Box marginY="12">
        <Checkbox colorScheme="orange" defaultChecked marginX={5} size="lg">
          <Text fontSize="xl">모두 선택</Text>
        </Checkbox>
        <Container>
          <VStack flex={1} alignItems="stretch" gap={5} marginY="5">
            {initData.map(data => (
              <BasketItem key={data.id} data={data} />
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
