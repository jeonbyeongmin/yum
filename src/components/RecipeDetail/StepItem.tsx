import {Box, HStack, Image, Text} from '@chakra-ui/react';
import React from 'react';

interface StepItem {
  step: number;
  img: string;
  desc: string;
}

const StepItem = ({step, img, desc}: Props) => {
  return (
    <HStack alignItems={'flex-start'} gap={5} w="100%">
      <Image src={img} w="300px" alt="이미지가 없습니다" />
      <Box>
        <Text fontSize={'2xl'} fontWeight="bold" color="#dd6b1f">
          step {step + 1}
        </Text>
        <Text fontSize={'2xl'} marginY={5}>
          {desc}
        </Text>
      </Box>
    </HStack>
  );
};

export default StepItem;
