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
    <Flex flexDirection={'column'} gap={3} marginY="20">
      <Flex>
        <Text
          fontSize="1.6rem"
          minW={'120px'}
          lineHeight="35px"
          fontWeight="bold"
        >
          n인분
        </Text>
        <Input
          placeholder="Select serving"
          _placeholder={{fontSize: 'xl'}}
          h={'35px'}
          type={'number'}
          w="200px"
          borderColor={'#b9b9b9'}
          name={'servings'}
          onChange={handleChange}
        />
      </Flex>
      <Flex>
        <Text
          fontSize="1.6rem"
          minW={'120px'}
          lineHeight="35px"
          fontWeight="bold"
        >
          조리시간
        </Text>
        <Input
          placeholder="Select cooking time"
          _placeholder={{fontSize: 'xl'}}
          h={'35px'}
          type={'text'}
          w="200px"
          borderColor={'#b9b9b9'}
          name={'time'}
          onChange={handleChange}
        />
      </Flex>
      <Flex>
        <Text
          fontSize="1.6rem"
          minW={'120px'}
          lineHeight="35px"
          fontWeight="bold"
        >
          카테고리
        </Text>
        <Select
          h={'35px'}
          w="200px"
          borderColor={'#b9b9b9'}
          placeholder="Select category"
          _placeholder={{fontSize: 'xl'}}
          name={'category'}
          onChange={handleChange}
        >
          <option value="option1">간편 요리</option>
          <option value="option2">찌개류</option>
          <option value="option3">디저트</option>
          <option value="option3">면/만두</option>
          <option value="option3">밥/죽/떡</option>
          <option value="option3">퓨전</option>
          <option value="option3">양식</option>
          <option value="option3">샐러드</option>
          <option value="option3">스프</option>
          <option value="option3">빵</option>
          <option value="option3">과자</option>
          <option value="option3">기타</option>
        </Select>
      </Flex>
    </Flex>
  );
}
