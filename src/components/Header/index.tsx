import styled from '@emotion/styled';
import React from 'react';

function Header() {
  return <Wrapper>Header</Wrapper>;
}

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  z-index: 1000;
  background: white;

  @media (max-width: 767px) {
    font-size: 13px;
    height: 60px;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1044px;
  padding: 20px;
  margin: 0 auto;
`;

export default Header;
