import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  Button,
} from '@chakra-ui/react';
import Layout from 'components/Layout';
import React, {useCallback, useState} from 'react';
import {IStoreItem} from 'types/store';

// interface IStoreRegist {}
const initStoreItem = {
  name: '',
  img: '',
  price: 0,
  company: '',
  category: '',
};

function StoreRegist() {
  const [info, setInfo] = useState<IStoreItem>(initStoreItem);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const newInfo = {...info};
    const {
      currentTarget: {value, name},
    } = event;
    newInfo[name] = value;
    setInfo(newInfo);
    console.log(newInfo);
  };

  const handleSubmit = () => {
    console.log(info);
  };
  return (
    <Layout>
      <Heading m={10}>스토어 등록 페이지</Heading>
      <VStack m={10}>
        <FormControl isRequired>
          <FormLabel htmlFor="name"> name</FormLabel>
          <Input
            id="name"
            placeholder=" name"
            name="name"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="img">img</FormLabel>
          <Input
            id="img"
            name="img"
            placeholder="img 주소 넣어야되용!"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="price">price</FormLabel>
          <Input
            id="price"
            name="price"
            placeholder="price"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="company">company</FormLabel>
          <Input
            id="company"
            name="company"
            placeholder="company"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="category">category</FormLabel>
          <Select
            id="category"
            name="category"
            placeholder="Select category "
            onChange={handleChange}
          >
            <option>과일</option>
            <option>채소</option>
            <option>기타</option>
          </Select>
        </FormControl>
        <Button colorScheme="orange" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Layout>
  );
}

export default StoreRegist;
