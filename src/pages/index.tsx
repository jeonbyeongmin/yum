import type {NextPage} from 'next';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Text>Hello world</Text>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Text = styled.div``;

export default Home;
