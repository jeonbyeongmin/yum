import React from 'react';
import {Box, Flex, Image, Input} from '@chakra-ui/react';
import {PlusOutLineIcon} from 'components/Icon';
import ImageFile from 'components/ImageFile';
import styled from '@emotion/styled';

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
export default ImageFileContainer;
