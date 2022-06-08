import styled from '@emotion/styled';
import React from 'react';
import {Box, Image} from '@chakra-ui/react';
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

export default ImageFile;
