import {Checkbox, VStack, Flex, Box, Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {getUserBasketItem} from 'api/basket';
import BasketItem from 'components/BasketItem';
import Layout from 'components/Layout';
import ResultBox from 'components/ResultBox';
import {Item} from 'framer-motion/types/components/Reorder/Item';
import {GetServerSideProps} from 'next';
import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {shoppingBasketState} from 'recoil/shoppingBasket';
import {media} from 'styles/theme';
import {IBasketItem, IMoneyBox} from 'types/store';
interface IShoppingBasket {
  info: any[];
}
function ShoppingBasket({info}) {
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
    setItems(info);
  }, []);

  useEffect(() => {
    const calculateMoney = () => {
      let totalMoney = 0;
      let totalDelivery = 0;

      items.forEach(it => {
        if (selectItemIds.includes(it.docId)) {
          totalMoney += +it.price * +it.count;
          totalDelivery += +it.delivery;
        } else {
          // console.log('없음!', it);
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
          if (+it.count > 1) {
            return {
              ...it,
              count: +it.count - 1,
            };
          }
          return it;
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
    if (selectItemIds.includes(id)) {
      setSelectItemIds(selectItemIds.filter(se => se !== id));
    } else {
      setSelectItemIds([...selectItemIds, id]);
    }
  };

  const handleAllCheckChange = (checked: boolean) => {
    if (checked) {
      setSelectItemIds(items.map(it => it.docId));
    } else {
      setSelectItemIds([]);
    }
  };

  return (
    <Layout>
      <Box marginY="12">
        <Checkbox
          colorScheme="orange"
          defaultChecked
          marginX={5}
          size="lg"
          onChange={e => handleAllCheckChange(e.target.checked)}
        >
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
                selectItemIds={selectItemIds}
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
export const getServerSideProps: GetServerSideProps = async context => {
  // const {id} = context.query;
  const info = await getUserBasketItem('ej9fEU5m8qS34zmyxqTGXjMrPX63');
  // console.log(info);
  return {
    props: {
      info: info,
    },
  };
};

export default ShoppingBasket;
