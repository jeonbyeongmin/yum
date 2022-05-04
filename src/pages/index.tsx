import type {NextPage} from 'next';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Text>Hello world</Text>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;
`;

const Text = styled.div`
  font-size: 20px;
`;

export default Home;
