import styled from '@emotion/styled';
import {css} from '@emotion/react';

import Image from 'next/image';
import React, {ReactNode} from 'react';
import {media} from 'styles/theme';
import logo from '../../../public/logo.png';
import Nav from 'components/Nav';
import SearchBar from 'components/SearchBar';
import {CartIcon, UserIcon, SearchIcon} from 'components/Icon';
import {
  Box,
  HStack,
  Text,
} from '@chakra-ui/react';
import IconBtn from 'components/IconBtn';
import Btn from 'components/Btn';

function Header() {
  return (
    <Wrapper>
      <HStack
        spacing={5}
        alignItems={'center'}
        h={'100%'}
        maxWidth="1024px"
        m={'0 auto'}
      >
        <Logo fontSize={'4xl'} fontWeight="bold">
          YUM
        </Logo>
        <Box flex={1} minWidth={'135px'}>
          <NavItem
            m={5}
            fontSize="2xl"
            color="#a5a5a5"
            fontWeight={'bold'}
            current={'true'}
          >
            레시피
          </NavItem>
          <NavItem m={5} fontSize="2xl" color="#a5a5a5" fontWeight={'bold'}>
            스토어
          </NavItem>
        </Box>
      <SearchBar/>
        <Box flexDirection={'row'} minWidth="80px">
          <IconBtn icon={<CartIcon />} label={'shpping basket'}></IconBtn>
          <IconBtn icon={<UserIcon />} label={'mypage'}></IconBtn>
        </Box>
        <Box>
          <Btn>레시피 작성</Btn>
        </Box>
      </HStack>
    </Wrapper>
  );
}

const Logo = styled(Box)`
  font-family: Binggrae, -apple-system, BlinkMacSystemFont, helvetica,
    Apple SD Gothic Neo, sans-serif;
`;
const NavItem = styled(Text)`
  display: inline-flex;
  font-weight: 700;
  cursor: pointer;
  ${props =>
    props.current &&
    css`
      color: #454545;
      &:active {
        opacity: 0.8;
      }
    `}
`;

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  font-size: 15px;
  color: #000;
  height: 80px;
  background-color: #fff;
  ${media.tablet} {
    font-size: 13px;
    height: 60px;
  }
`;

export default Header;
