import {Flex, Input, Text, Select} from '@chakra-ui/react';

interface ICookingInfo {
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export default function CookingInfo({handleChange}: ICookingInfo) {
  return (
    <>
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
    </>
  );
}
