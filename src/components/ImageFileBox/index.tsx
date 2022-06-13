import React, {Dispatch, SetStateAction, useCallback} from 'react';
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

  // TODO: 같은 이미지가 한번에 사라지는 문제 해결해야 함
  const handleImageDelete = useCallback(
    (url: string) => {
      const newImages = images.filter(current => current !== url);
      setImages(newImages);
    },
    [images, setImages],
  );

  return (
    <Flex marginY={3} gap={2}>
      {images?.map((item, index) => {
        return (
          <ImageFile
            imageUrl={item}
            key={item + index}
            handleDelete={() => handleImageDelete(item)}
          />
        );
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
