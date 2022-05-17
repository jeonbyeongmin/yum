import styled from '@emotion/styled';
import Footer from 'components/Footer';
import Header from 'components/Header';
import React, {ReactNode} from 'react';
import {media} from 'styles/theme';

interface ILayout {
  children: ReactNode;
}

function Layout({children}: ILayout) {
  return (
    <>
      <Header />
      <Body>
        <HeaderArea></HeaderArea>
        {children}
      </Body>
      <Footer />
    </>
  );
}
const HeaderArea = styled.div`
  height: 80px;
  ${media.tablet} {
    height: 60px;
  }
`;
const Body = styled.div`
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
`;

export default Layout;
