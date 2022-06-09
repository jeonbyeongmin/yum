import {Dispatch, SetStateAction, useState} from 'react';

function useImageUpload(
  images: string[],
  setImages: Dispatch<SetStateAction<string[]>>,
) {
  const onChange = async (event: any) => {
    try {
      const {
        target: {files},
      } = event;

      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = finishedEvent => {
        const {
          currentTarget: {result},
        } = finishedEvent;

        setImages([...images, result]);
        event.target.value = '';
      };

      reader.readAsDataURL(file);
    } catch (e) {
      console.log(e);
    }
  };

  return {onChange};
}

export default useImageUpload;
