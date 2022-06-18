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
import {getStoreItem} from 'api/store';
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
      // console.log(res);
      setItems(res);
    });
  }, [searchText]);

  return (
    <>
      <Button onClick={onOpen} colorScheme="orange" marginBottom={10}>
        재료 선택
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>재료 선택</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              id="searchIngredient"
              placeholder="searchIngredient"
              onChange={e => setSearchText(e.target.value)}
              value={searchText}
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
                  <Image src={item.img} w={16} h={16} />
                  <Text size="lg">{item.name}</Text>
                </HStack>
              ))}
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default IngredientSelectModal;
