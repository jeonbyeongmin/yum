import {
  Heading,
  Box,
  Input,
  Checkbox,
  HStack,
  VStack,
  CheckboxGroup,
} from '@chakra-ui/react';
import Btn from 'components/Btn';
import IngredientInfo from 'components/IngredientInfo';
import React, {useState} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {IIngredientItem} from 'types/store';
import {shoppingBasketState} from 'recoil/shoppingBasket';
interface IngredientCart {
  info: IIngredientItem[];
}
const IngredientCart = ({info}: IngredientCart) => {
  const [select, setSelect] = useState<string[]>(info.map(io => io.docId));
  // const [shoppingBasket, setShoppingBasket] =
  //   useRecoilState(shoppingBasketState);
  const setShoppingBasket = useSetRecoilState(shoppingBasketState);

  const handleShoppingBtnClick = () => {
    const selectList: IIngredientItem[] = [];
    info.forEach(ing => {
      if (ing.docId && select.includes(ing.docId)) {
        selectList.push(ing);
      }
    });
    setShoppingBasket(selectList);
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
      w={'250px'}
      border="1px solid #D6D6D6"
      borderRadius={5}
      height={'fit-content'}
      minHeight={'400px'}
      alignItems="flex-start"
      p={8}
      paddingBottom="100px"
      position={'relative'}
    >
      <Heading fontSize={'2xl'}>재료</Heading>
      <CheckboxGroup
        colorScheme="orange"
        // defaultValue={select}
        // onChange={handleChange}
      >
        <VStack spacing={5}>
          {info.map((i, index) => (
            <Checkbox
              key={i.docId}
              size="lg"
              spacing={8}
              // colorScheme={'orange'}
              defaultChecked
              onChange={() => handleCheckChange(i.docId)}
            >
              <IngredientInfo img={i.img} name={i.iname} content={i.iamount} />
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
      <HStack position={'absolute'} bottom={5} width={'calc(100% - 4rem)'}>
        <Btn w={'100%'} handleClick={handleShoppingBtnClick}>
          장바구니
        </Btn>
        {/* <Btn w={'50%'} onC>구매하기</Btn> */}
      </HStack>
    </VStack>
  );
};

export default IngredientCart;
