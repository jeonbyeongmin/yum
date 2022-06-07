import {
  Box,
  Heading,
  Flex,
  Image,
  Input,
  Textarea,
  Text,
  Select,
} from '@chakra-ui/react';
import {PlusOutLineIcon} from 'components/Icon';
import styled from '@emotion/styled';

export default function CookingInfo() {
  return (
    <Box marginY="10">
      <Heading size="lg" marginY="5">요리정보 </Heading>
      <Flex
        flexDirection={'column'}
        border="1px solid #b9b9b9"
        borderRadius={'5px'}
        minH="200px"
      >
        <InfoInput placeholder="요리의 이름을 입력해주세요." p={5} />
        <CookingDesc
          placeholder="요리에 대해 설명해주세요.."
          resize={'none'}
          p={5}
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
          />
        </Flex>
        <Flex>
          <Text fontSize="1.6rem" minW={'120px'} lineHeight="35px">
            카테고리
          </Text>
          <Select
            h={'35px'}
            type={'text'}
            w="200px"
            borderColor={'#b9b9b9'}
            placeholder="Select category"
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
function ImageFileContainer() {
  return (
    <Flex marginY={3} gap={2}>
      <ImageFile key={1}></ImageFile>

      <ImageFileInputWrapper>
        <Input type={'file'} id={`fileInput`} hidden />
        <label htmlFor={`fileInput`}>
          <PlusOutLineIcon />
        </label>
      </ImageFileInputWrapper>
    </Flex>
  );
}
function ImageFile() {
  return (
    <ImageFileInputWrapper>
      <Image
        src="https://img.lovepik.com/element/40162/3354.png_860.png"
        alt="Dan Abramov"
        w={'100%'}
        h={'100%'}
      />
    </ImageFileInputWrapper>
  );
}

const ImageFileInputWrapper = styled(Box)`
  border: 1px solid #b9b9b9;
  width: 70px;
  height: 70px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #b9b9b9;
  justify-content: center;
`;
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
