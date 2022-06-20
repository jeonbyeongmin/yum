import {Checkbox, VStack, Flex, Box, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import BasketItem from 'components/BasketItem';
import Layout from 'components/Layout';
import ResultBox from 'components/ResultBox';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {shoppingBasketState} from 'recoil/shoppingBasket';
import {media} from 'styles/theme';
import {IBasketItem, IMoneyBox} from 'types/store';

function ShoppingBasket() {
  const [items, setItems] = useRecoilState<IBasketItem[]>(shoppingBasketState);
  const [money, setMoney] = useState<IMoneyBox>({
    totalMoney: 0,
    totalDelivery: 0,
    estimateMoney: 0,
  });
  console.log('shopping list', items);
  useEffect(() => {
    const calculateMoney = () => {
      let totalMoney = 0;
      let totalDelivery = 0;

      items.forEach(it => {
        totalMoney += +it.price * +it.count;
        totalDelivery += +it.delivery;
      });

      setMoney({
        totalMoney,
        totalDelivery,
        estimateMoney: totalMoney + totalDelivery,
      });
    };

    calculateMoney();
  }, [items]);

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
  };

  const handleItemDeleteBtnClick = (itemId: string) => {
    const newItems = items.filter(it => it.docId !== itemId);
    setItems(newItems);
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
                handleItemDeleteBtnClick={handleItemDeleteBtnClick}
              />
            ))}
          </VStack>
          <ResultBox result={money} />
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
