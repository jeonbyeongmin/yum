import React, {Dispatch, SetStateAction} from 'react';
import {Box, Flex} from '@chakra-ui/react';
import {PlusOutLineIcon} from 'components/Icon';
import ImageFile from 'components/ImageFile';
import styled from '@emotion/styled';
import useImageUpload from 'common/hooks/useImageUpload';

interface IImageFileContainer {
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}

function ImageFileContainer({images, setImages}: IImageFileContainer) {
  const {onChange} = useImageUpload(images, setImages);

  return (
    <Flex marginY={3} gap={2}>
      {images?.map((item, index) => {
        const key = item + index;
        return <ImageFile imageUrl={item} key={key} />;
      })}
      <ImageFileInputWrapper>
        <input type="file" id="fileInput" onChange={onChange} hidden />
        <label htmlFor="fileInput">
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
