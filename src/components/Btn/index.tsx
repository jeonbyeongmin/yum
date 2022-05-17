import {Button} from '@chakra-ui/react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import React, {ReactNode} from 'react';

interface IButton extends ButtonStyle {
  children: ReactNode;
}

interface ButtonStyle {
  theme?: string;
  bgColor?: string;
}

function Btn({children, theme, ...rest}: IButton) {
  return (
    <Wrapper
      theme
      size="lg"
      p={{base : '20px',md : '20px'}}
      _active={{
        opacity: 0.8
      }}
      _focus={{
        boxShadow: 'none',
      }}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}
const Wrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  ${props =>
    (props.theme || props.theme == 'orange') &&
    css`
      background-color: orange;
      &:focus, &:active, &:hover {
        background-color: orange;
      }
    `}
  ${props =>
    props.theme == 'white' &&
    css`
      background-color: #ffffff;
    `}
`;
export default Btn;
