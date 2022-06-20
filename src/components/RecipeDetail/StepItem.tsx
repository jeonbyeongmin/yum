import {Box, HStack, Text} from '@chakra-ui/react';
import {ProductImage} from 'components/ProductImage';
import React from 'react';

interface StepItem {
  step: number;
  img: string;
  desc: string;
}

function StepItem({step, img, desc}: StepItem) {
  return (
    <HStack alignItems={'flex-start'} gap={5} w="100%">
      <ProductImage
        src={img}
        width={300}
        height={250}
        objectFit="cover"
        alt="이미지가 없습니다"
        borderRadius="xl"
      />
      <Box flex={1}>
        <Text fontSize={'2xl'} fontWeight="bold" color="#dd6b1f">
          STEP {step + 1}
        </Text>
        <Text fontSize={'2xl'} marginY={5}>
          {desc}
        </Text>
      </Box>
    </HStack>
  );
}

export default StepItem;
