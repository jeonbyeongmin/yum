import {css} from '@emotion/react';
import styled from '@emotion/styled';
import React, {ReactNode} from 'react';

interface IButton extends ButtonStyle {
  children: ReactNode;
}

interface ButtonStyle {
  primary?: boolean;
  icon?: boolean;
  width?: string;
  height?: string;
  fw?: number;
  br?: string;
}

function Button({children, ...rest}: IButton) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

const Wrapper = styled.button<ButtonStyle>`
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: ${props => props.fw};
  border-radius: ${props => props.br};
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.primary &&
    css`
      color: white;
      background: orange;

      &:active {
        opacity: 0.8;
      }
    `}

  ${props =>
    props.icon &&
    css`
      color: black;
      border-radius: 50%;

      &:active {
        background: #efefef;
      }
    `}
`;

export default Button;
