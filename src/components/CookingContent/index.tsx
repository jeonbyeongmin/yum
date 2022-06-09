import {Flex, Heading, Input, Textarea} from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

interface ICookingContent {
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

function CookingContent({handleChange}: ICookingContent) {
  return (
    <>
      <Heading size="lg" marginY="5">
        요리정보
      </Heading>
      <Flex
        flexDirection={'column'}
        border="1px solid #b9b9b9"
        borderRadius={'5px'}
        minH="200px"
      >
        <InfoInput
          placeholder="요리의 이름을 입력해주세요."
          p={5}
          name={'name'}
          onChange={handleChange}
        />
        <CookingDesc
          placeholder="요리에 대해 설명해주세요.."
          resize={'none'}
          p={5}
          // value{}
          name={'desc'}
          onChange={handleChange}
        />
      </Flex>
    </>
  );
}

const CookingDesc = styled(Textarea)`
  border: none;
  border-top: 1px solid #b9b9b9;
  flex: 1;
  border-radius: 0;
`;

const InfoInput = styled(Input)`
  border: none;
  border-radius: 0;
  min-height: 50px;
`;

export default CookingContent;
