import React from 'react';
import {
  VStack,
  HStack,
  Checkbox,
  Image,
  Text,
  IconButton,
} from '@chakra-ui/react';
import {getCommaFormatting} from 'common/utils/getCommaFormatting';
import Counter from 'components/Counter';
import {CloseIcon} from 'components/Icon';
import {IProductItem} from 'pages/shoppingbasket';

interface IBasketItem {
  data: IProductItem;
}

function BasketItem({data}: IBasketItem) {
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
        <Checkbox size="lg" colorScheme="orange" defaultChecked />
        <Image
          src="https://www.korea.kr/newsWeb/resources/temp/images/000052/%EC%82%AC%EA%B3%BC_%EB%B3%B8%EB%AC%B8.jpg"
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
      <Counter />
      <Text
        fontSize={'2xl'}
        fontWeight="700"
        color="#000000"
        whiteSpace={'nowrap'}
      >
        {getCommaFormatting(data.price + '')}원
      </Text>
      <IconButton
        aria-label="close"
        icon={<CloseIcon />}
        variant="ghost"
        _focus={{border: 'none'}}
      />
    </HStack>
  );
}

export default BasketItem;
