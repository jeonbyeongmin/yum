import {Box, HStack, Image, Text} from '@chakra-ui/react';
import React from 'react';

interface StepItem {
  step: number;
  img: string;
  desc: string;
}

const StepItem = ({step, img, desc}: Props) => {
  return (
    <HStack alignItems={'flex-start'} gap={5}>
      <Image src={img} w="300px" alt="이미지가 없습니다" />
      <Box>
        <Text fontSize={'2xl'} fontWeight="bold" color={'#EA900B'}>
          step {step + 1}
        </Text>
        <Text fontSize={'lg'} marginY={5}>
          {desc}
        </Text>
      </Box>
    </HStack>
  );
};

export default StepItem;
