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
  borderColor?: string;
}

function Btn({children, theme, ...rest}: IButton) {
  return (
    <Wrapper
      size="lg"
      // _active={{
      //   opacity: 0.8,
      // }}
      // _focus={{
      //   opacity: 0.8,
      //   boxShadow: `0 0 1px 2px #454545, 0 1px 1px rgba(0, 0, 0, .15)`,
      // }}
      {...rest}
      theme
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
  padding: 0px 20px;
  background-color: orange;

  &:active {
    background-color: orange;
    opacity: 0.5;
  }
  &:hover {
    background-color: orange;
  }
  &:focus {
    background-color: orange;
    /* opacity: 0.8; */
    box-shadow: none;
  }

  ${props =>
    props.theme == 'white' &&
    css`
      background-color: #ffffff;
    `}
`;
// const Wrapper = styled.button<ButtonStyle>`
//   width: ${props => props.width};
//   height: ${props => props.height};
//   font-weight: ${props => props.fw};
//   border-radius: ${props => props.br};
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   ${props =>
//     props.primary &&
//     css`
//       color: white;
//       background: orange;

//       &:active {
//         opacity: 0.8;
//       }
//     `}

//   ${props =>
//     props.icon &&
//     css`
//       color: black;
//       border-radius: 50%;

//       &:active {
//         background: #efefef;
//       }
//     `}
// `;

export default Btn;
