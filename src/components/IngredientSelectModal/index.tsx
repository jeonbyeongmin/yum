import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Box,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import {getStoreItem} from 'api/store';
import {PlusOutLineIcon} from 'components/Icon';
import React, {useEffect, useState} from 'react';
import {IStoreItem} from 'types/store';
interface IIngredientSelectModal {
  handleSelect: (item: IStoreItem) => void;
}
function IngredientSelectModal({handleSelect}: IIngredientSelectModal) {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState<IStoreItem[]>([]);

  useEffect(() => {
    getStoreItem(searchText).then(res => {
      setItems(res);
    });
  }, [searchText]);

  return (
    <>
      <ImageFileInputWrapper
        borderRadius="xl"
        shadow="base"
        onClick={() => onOpen()}
      >
        <PlusOutLineIcon />
      </ImageFileInputWrapper>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent
          paddingTop="14"
          paddingBottom="10"
          paddingX="10"
          borderRadius="xl"
        >
          <ModalHeader fontSize="3xl" marginY="3" fontWeight="bold">
            재료 선택
          </ModalHeader>
          <ModalCloseButton _focus={{border: 'none'}} />
          <ModalBody>
            <Input
              id="searchIngredient"
              placeholder="Search ingredient"
              onChange={(e: any) => setSearchText(e.target.value)}
              value={searchText}
              _placeholder={{fontSize: 'xl'}}
              fontSize="xl"
              borderColor="gray.300"
              size="lg"
              shadow="base"
              padding="5"
            />
            <Box>
              {items.map(item => (
                <HStack
                  key={item.name}
                  spacing={5}
                  marginY={5}
                  onClick={() => {
                    handleSelect(item);
                    setSearchText('');
                    onClose();
                  }}
                  cursor={'pointer'}
                >
                  <Image
                    src={item.img}
                    w={24}
                    h={24}
                    alt="ingredient"
                    borderRadius="xl"
                    objectFit={'cover'}
                  />
                  <Text fontSize="xl">{item.name}</Text>
                </HStack>
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="orange"
              mr={3}
              size="lg"
              onClick={onClose}
              _focus={{border: 'none'}}
            >
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const ImageFileInputWrapper = styled(Box)`
  border: 1px solid #b9b9b9;
  width: 70px;
  height: 70px;
  display: inline-flex;
  align-items: center;
  border: 1px solid #b9b9b9;
  justify-content: center;
`;

export default IngredientSelectModal;
