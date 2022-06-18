import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  Button,
} from '@chakra-ui/react';
import {addStoreItem} from 'api/store';
import Layout from 'components/Layout';
import React, {useState} from 'react';
import {IStoreItem} from 'types/store';

// interface IStoreRegist {}
const initStoreItem = {
  name: '',
  desc: '',
  img: '',
  price: 0,
  delivery: 0,
  volume: '',
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
    const dummy = {
      name: '충주 유기농 사과 1박스',
      desc: '충북 충주시에서 직접 수확한 유기농 사과입니다.',
      img: 'https://images.unsplash.com/photo-1584306670957-acf935f5033c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      price: '12000',
      delivery: '3000',
      volume: '약 300g*30개',
      company: '충주사과',
      category: '과일',
    };
    addStoreItem(dummy).then(res => {
      console.log(res);
    });
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
        <FormControl isRequired>
          <FormLabel htmlFor="desc"> desc</FormLabel>
          <Input
            id="desc"
            placeholder=" desc"
            name="desc"
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
          <FormLabel htmlFor="delivery">delivery</FormLabel>
          <Input
            id="delivery"
            name="delivery"
            placeholder="delivery"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="volume">volume</FormLabel>
          <Input
            id="volume"
            name="volume"
            placeholder="volume"
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
