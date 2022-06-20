import {
  Heading,
  Box,
  Input,
  Checkbox,
  HStack,
  VStack,
  CheckboxGroup,
  Button,
} from '@chakra-ui/react';
import Btn from 'components/Btn';
import IngredientInfo from 'components/IngredientInfo';
import React, {useState} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {IBasketItem, IIngredientItem} from 'types/store';
import {shoppingBasketState} from 'recoil/shoppingBasket';
import router from 'next/router';
import IngredientCartItem from './IngredientCartItem';
interface IIngredientCart {
  info: IIngredientItem[];
}
const IngredientCart = ({info}: IIngredientCart) => {
  const [select, setSelect] = useState<string[]>(info.map(io => io.docId));
  // const [shoppingBasket, setShoppingBasket] =
  //   useRecoilState(shoppingBasketState);
  const setShoppingBasket =
    useSetRecoilState<IBasketItem[]>(shoppingBasketState);

  const handleShoppingBtnClick = () => {
    const selectList: IBasketItem[] = [];
    info.forEach(ing => {
      if (ing.docId && select.includes(ing.docId)) {
        selectList.push({...ing, count: 1}); //TODO : 이 count는 어떻게 초기화 하는게 좋을까요...
      }
    });
    setShoppingBasket(selectList);
    router.push('/shoppingbasket');
    // console.log(selectList, select);
  };
  const handleCheckChange = (id: string) => {
    const newSelect = [...select];
    if (newSelect.includes(id)) {
      console.log('re', newSelect);
      setSelect(newSelect.filter(se => se !== id));
    } else {
      newSelect.push(id);
      setSelect(newSelect);
    }
  };
  return (
    <VStack
      w={'300px'}
      border="1px solid #D6D6D6"
      borderRadius={5}
      height={'fit-content'}
      minHeight={'400px'}
      alignItems="flex-start"
      p={8}
      paddingBottom="100px"
      position={'fixed'}
    >
      <Heading fontSize={'2xl'}>재료</Heading>
      <CheckboxGroup colorScheme="orange">
        <VStack spacing={5} alignItems="flex-start">
          {info.map((i, index) => (
            <Checkbox
              key={i.docId}
              size="lg"
              spacing={8}
              defaultChecked
              onChange={() => handleCheckChange(i.docId)}
            >
              <IngredientCartItem
                img={i.img}
                name={i.name}
                content={i.iamount}
              />
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
      <HStack position={'absolute'} bottom={5} width={'calc(100% - 4rem)'}>
        <Button
          colorScheme="orange"
          variant="outline"
          height={'40px'}
          width={'50%'}
          fontSize="xl"
          onClick={handleShoppingBtnClick}
          borderRadius="xl"
        >
          장바구니
        </Button>
        <Button
          colorScheme={'orange'}
          height={'40px'}
          width="50%"
          borderRadius="xl"
          fontSize="xl"
        >
          구매하기
        </Button>
      </HStack>
    </VStack>
  );
};

export default IngredientCart;
