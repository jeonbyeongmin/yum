import styled from "@emotion/styled";
import HStack from "components/HStack";
import Link from "next/link";
import React from "react";
import { media } from "styles/theme";

function Nav() {
  return (
    <Wrapper>
      <HStack gap="30px">
        <Link href="/" passHref>
          <LinkText>레시피</LinkText>
        </Link>
        <Link href="/Store" passHref>
          <LinkText>스토어</LinkText>
        </Link>
      </HStack>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    display: none;
  }
`;

const LinkText = styled.a`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:active {
    color: orange;
  }
`;

export default Nav;
