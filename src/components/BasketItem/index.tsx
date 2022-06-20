import React from 'react';
import {
  VStack,
  HStack,
  Checkbox,
  Image,
  Text,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import {getCommaFormatting} from 'common/utils/getCommaFormatting';
import Counter from 'components/Counter';
import {CloseIcon} from 'components/Icon';
import {IProductItem} from 'pages/shoppingbasket';
import {IBasketItem} from 'types/store';

interface IBasketItemComponent {
  data: IBasketItem;
  handleCountClick: (item: IBasketItem, operation: string) => void;
  handleItemDeleteBtnClick: (docId: string) => void;
  handleCheckChange: (docId: string) => void;
}

function BasketItem({
  data,
  handleCountClick,
  handleItemDeleteBtnClick,
  handleCheckChange,
}: IBasketItemComponent) {
  return (
    <HStack
      alignItems={'center'}
      border={'1px solid #B9B9B9'}
      minH="80px"
      borderRadius="xl"
      justifyContent="space-between"
      p={8}
      flexWrap="nowrap"
    >
      <HStack gap="6">
        <Checkbox
          size="lg"
          colorScheme="orange"
          defaultChecked
          onChange={() => handleCheckChange(data.docId)}
        />
        <Image
          src={data.img}
          width="120px"
          height="100px"
          objectFit={'cover'}
          alt="장바구니 이미지"
          borderRadius="xl"
        />
        <VStack alignItems="flex-start" minW="fit-content" gap="6">
          <Text fontSize="2xl" fontWeight="bold">
            {data.name}
          </Text>
          <Text fontSize="xl" color="#8E8E8E">
            배송비 {data.delivery ? data.delivery + '원' : '무료'}
          </Text>
        </VStack>
      </HStack>
      <Counter
        cnt={data.count}
        handleClick={(operation: string) => handleCountClick(data, operation)}
      />
      <Text
        fontSize={'2xl'}
        fontWeight="700"
        color="#000000"
        whiteSpace={'nowrap'}
      >
        {getCommaFormatting(data.price + '')}원
      </Text>
      <CloseButton
        _focus={{border: 'none'}}
        onClick={() => handleItemDeleteBtnClick(data.docId)}
      />
    </HStack>
  );
}

export default BasketItem;
