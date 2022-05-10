import styled from '@emotion/styled';
import React, {ReactNode} from 'react';

interface WrapperStyle {
  gap: string;
}

interface IHStack extends WrapperStyle {
  children: ReactNode;
}

function HStack({children, ...rest}: IHStack) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}

const Wrapper = styled.div<WrapperStyle>`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: ${props => props.gap};
  }
`;

export default HStack;
