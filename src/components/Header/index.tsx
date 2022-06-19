import styled from '@emotion/styled';
import React from 'react';
import {media} from 'styles/theme';
import SearchBar from 'components/SearchBar';
import {CartIcon, UserIcon, SearchIcon} from 'components/Icon';
import {Badge, Box, Button, HStack, IconButton, Text} from '@chakra-ui/react';
import IconBtn from 'components/IconBtn';
import Link from 'next/link';
import {useRouter} from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <Wrapper>
      <HStack
        alignItems={'center'}
        h={'100%'}
        maxWidth="1024px"
        m={'0 auto'}
        paddingX={{base: 5, sm: 10}}
        gap="9"
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
              <Button
                variant="unstyled"
                fontSize="2xl"
                color={router.asPath === '/' ? 'black' : '#a5a5a5'}
                fontWeight="extrabold"
                minW={'50px'}
                _focus={{border: 'none'}}
              >
                레시피
              </Button>
            </a>
          </Link>
          <Link href="/store">
            <a>
              <Button
                variant="unstyled"
                fontSize="2xl"
                color={router.asPath === '/store' ? 'black' : '#a5a5a5'}
                fontWeight={'bold'}
                minW={'50px'}
                _focus={{border: 'none'}}
              >
                스토어
              </Button>
            </a>
          </Link>
        </HStack>
        <Box display={{base: 'none', md: 'block'}}>
          <SearchBar />
        </Box>
        <HStack flexDirection={'row'} spacing={'5px'}>
          <IconBtn
            icon={<SearchIcon size={25} />}
            label={'search'}
            type="mobile"
          />
          <Link href="/shoppingbasket">
            <a>
              <IconButton
                aria-label="shpping basket"
                variant="ghost"
                icon={<CartIcon />}
                _focus={{border: 'none'}}
                borderRadius="full"
                w="16"
                h="16"
              />
            </a>
          </Link>
          <Link href="/mypage">
            <a>
              <IconButton
                aria-label="mypage"
                variant="ghost"
                icon={<UserIcon />}
                _focus={{border: 'none'}}
                borderRadius="full"
                w="16"
                h="16"
              />
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
