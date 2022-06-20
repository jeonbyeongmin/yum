import {Checkbox, VStack, Flex, Box, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import BasketItem from 'components/BasketItem';
import Layout from 'components/Layout';
import ResultBox from 'components/ResultBox';
import {Item} from 'framer-motion/types/components/Reorder/Item';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {shoppingBasketState} from 'recoil/shoppingBasket';
import {media} from 'styles/theme';
import {IBasketItem, IMoneyBox} from 'types/store';

function ShoppingBasket() {
  const [items, setItems] = useRecoilState<IBasketItem[]>(shoppingBasketState);
  const [selectItemIds, setSelectItemIds] = useState<string[]>(
    items.map(it => it.docId),
  );
  const [money, setMoney] = useState<IMoneyBox>({
    totalMoney: 0,
    totalDelivery: 0,
    estimateMoney: 0,
  });
  useEffect(() => {
    const calculateMoney = () => {
      let totalMoney = 0;
      let totalDelivery = 0;
      console.log('selectItemIds', selectItemIds);
      items.forEach(it => {
        if (selectItemIds.includes(it.docId)) {
          totalMoney += +it.price * +it.count;
          totalDelivery += +it.delivery;
        } else {
          console.log('없음!', it);
        }
      });

      setMoney({
        totalMoney,
        totalDelivery,
        estimateMoney: totalMoney + totalDelivery,
      });
    };

    calculateMoney();
  }, [items, selectItemIds]);

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

  const handleCheckChange = (id: string) => {
    // const newSelect = [...select];
    console.log('check ');

    if (selectItemIds.includes(id)) {
      console.log(
        'check false',
        selectItemIds.filter(se => se !== id),
      );
      setSelectItemIds(selectItemIds.filter(se => se !== id));
    } else {
      console.log('check true', [...selectItemIds, id]);
      setSelectItemIds([...selectItemIds, id]);
    }
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
                handleCheckChange={handleCheckChange}
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
