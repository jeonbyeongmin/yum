import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import {media} from 'styles/theme';
import logo from 'common/images/logo.png';
import Nav from 'components/Nav';
import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import {CartIcon, UserIcon} from 'components/Icon';
import HStack from 'components/HStack';

function Header() {
  return (
    <Wrapper>
      <Inner>
        <HStack gap="80px">
          <div>
            <Image src={logo} width="70" height="30" />
          </div>
          <Nav />
        </HStack>
        <HStack gap="30px">
          <SearchBar />
          <HStack gap="10px">
            <Button icon width="35px" height="35px">
              <CartIcon />
            </Button>
            <Button icon width="35px" height="35px">
              <UserIcon />
            </Button>
          </HStack>
          <Button primary width={'100px'} height={'40px'} fw={700} br={'10px'}>
            레시피 작성
          </Button>
        </HStack>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  /* height: 80px; */
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  z-index: 1000;
  background: white;
  ${media.tablet} {
    font-size: 13px;
    /* height: 60px; */
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  max-width: 1024px;
  padding: 20px;
  margin: 0 auto;
  height: 80px;
  background-color: #fff;
  ${media.tablet} {
    height: 60px;
  }
`;

export default Header;
