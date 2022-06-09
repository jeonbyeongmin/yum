import {
  Box,
  Heading,
  Flex,
  Input,
  Textarea,
  Text,
  Select,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import ImageFileContainer from 'components/ImageFileBox';

interface ICookingInfoPage {
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export default function CookingInfo({handleChange}: ICookingInfoPage) {
  return (
    <Box marginY="10">
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
      <ImageFileContainer />

      <Flex flexDirection={'column'} gap={3} marginY={16}>
        <Flex>
          <Text fontSize="1.6rem" minW={'120px'} lineHeight="35px">
            n인분
          </Text>
          <Input
            placeholder="Select serving"
            h={'35px'}
            type={'number'}
            w="200px"
            borderColor={'#b9b9b9'}
            name={'servings'}
            onChange={handleChange}
          />
        </Flex>
        <Flex>
          <Text fontSize="1.6rem" minW={'120px'} lineHeight="35px">
            조리시간
          </Text>
          <Input
            placeholder="Select cooking time"
            h={'35px'}
            type={'text'}
            w="200px"
            borderColor={'#b9b9b9'}
            name={'time'}
            onChange={handleChange}
          />
        </Flex>
        <Flex>
          <Text fontSize="1.6rem" minW={'120px'} lineHeight="35px">
            카테고리
          </Text>
          <Select
            h={'35px'}
            w="200px"
            borderColor={'#b9b9b9'}
            placeholder="Select category"
            name={'category'}
            onChange={handleChange}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
      </Flex>
    </Box>
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
