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
      <Body>{children}</Body>
      <Footer />
    </>
  );
}

const Body = styled.div`
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 85px;
  ${media.tablet} {
    padding-top: 60px;
  }
`;

export default Layout;
