import {Box, Heading, Flex, Image, Input, Textarea} from '@chakra-ui/react';
import {PlusOutLineIcon} from 'components/Icon';
import styled from '@emotion/styled';

export default function CookingInfo() {
  return (
    <Box marginY="10">
      <Heading marginY="5">요리정보 </Heading>
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
