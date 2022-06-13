import styled from '@emotion/styled';
import React from 'react';
import {Box, CloseButton, Image} from '@chakra-ui/react';

interface IImageFile {
  imageUrl: string;
  handleDelete: () => void;
}

function ImageFile({imageUrl, handleDelete}: IImageFile) {
  return (
    <ImageFileInputWrapper>
      <Image src={imageUrl} alt="Dan Abramov" w={'100%'} h={'100%'} />
      <DeleteBtn onClick={handleDelete} />
    </ImageFileInputWrapper>
  );
}
const DeleteBtn = styled(CloseButton)`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: orange;
  color: #fff;
  border-radius: 50%;
  font-size: 8px;
  width: 18px;
  height: 18px;
`;
const ImageFileInputWrapper = styled(Box)`
  border: 1px solid #b9b9b9;
  width: 70px;
  height: 70px;
  border-radius: 3px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #b9b9b9;
  justify-content: center;
  position: relative;
`;

export default ImageFile;
