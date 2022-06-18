import styled from '@emotion/styled';
import {css} from '@emotion/react';
import React from 'react';
import {media} from 'styles/theme';
import SearchBar from 'components/SearchBar';
import {CartIcon, UserIcon, SearchIcon} from 'components/Icon';
import {Box, Button, HStack, Text} from '@chakra-ui/react';
import IconBtn from 'components/IconBtn';
import Link from 'next/link';

function Header() {
  return (
    <Wrapper>
      <HStack
        alignItems={'center'}
        h={'100%'}
        maxWidth="1024px"
        m={'0 auto'}
        paddingX={{base: 5, sm: 10}}
        gap="10"
      >
        <Link href="/">
          <a>
            <Text
              fontFamily="Binggrae"
              fontSize="4xl"
              fontWeight="extrabold"
              color="orange.500"
              letterSpacing="tighter"
            >
              YUM
            </Text>
          </a>
        </Link>
        <HStack flex={1} spacing={{base: '5px', sm: '25px'}}>
          <Link href="/">
            <a>
              <NavItem
                fontSize="2xl"
                color="#a5a5a5"
                fontWeight={'bold'}
                current={'true'}
                minW={'50px'}
              >
                레시피
              </NavItem>
            </a>
          </Link>
          <Link href="/store">
            <a>
              <NavItem
                fontSize="2xl"
                color="#a5a5a5"
                fontWeight={'bold'}
                minW={'50px'}
              >
                스토어
              </NavItem>
            </a>
          </Link>
        </HStack>
        <Box display={{base: 'none', md: 'block'}}>
          <SearchBar />
        </Box>
        <HStack flexDirection={'row'} minWidth="80px" spacing={'5px'}>
          <IconBtn
            icon={<SearchIcon size={25} />}
            label={'search'}
            type="mobile"
          />
          <Link href="/shoppingbasket">
            <a>
              <IconBtn icon={<CartIcon />} label={'shpping basket'} />
            </a>
          </Link>
          <Link href="/mypage">
            <a>
              <IconBtn icon={<UserIcon />} label={'mypage'} />
            </a>
          </Link>
        </HStack>
        <Link href="/recipe/regist">
          <a>
            <Button
              colorScheme="orange"
              padding="7"
              borderRadius="xl"
              _focus={{border: 'none'}}
            >
              <Text fontSize="xl">레시피 작성</Text>
            </Button>
          </a>
        </Link>
      </HStack>
    </Wrapper>
  );
}

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
  z-index: 100;
  border-bottom: 1px solid #e0e0e0;
  ${media.tablet} {
    font-size: 13px;
    height: 60px;
  }
`;

export default Header;
