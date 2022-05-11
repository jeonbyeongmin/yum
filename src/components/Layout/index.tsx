import styled from '@emotion/styled';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React, {ReactNode} from 'react';

interface ILayout {
  children: ReactNode;
}

function Layout({children}: ILayout) {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  min-height: 100vh;
`;

export default Layout;
