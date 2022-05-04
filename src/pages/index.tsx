import type {NextPage} from 'next';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Column>Hello world</Column>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;
`;
const Column = styled.div``;

export default Home;
