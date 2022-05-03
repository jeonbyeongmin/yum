import type {NextPage} from 'next';

import tw from 'twin.macro';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Column>Hello world</Column>
    </Wrapper>
  );
};

const Wrapper = tw.section`flex w-full`;
const Column = tw.div`w-1/2`;

export default Home;
