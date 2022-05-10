import styled from '@emotion/styled';
import React from 'react';
import {media} from 'styles/theme';

function Footer() {
  return (
    <Wrapper>
      <Inner>&copy; {new Date().getFullYear()} YUM</Inner>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;

  ${media.tablet} {
    font-size: 13px;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1044px;
  padding: 0px 20px;
`;

export default Footer;
