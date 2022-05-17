import {IconButton} from '@chakra-ui/react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import React, {ReactNode} from 'react';

interface IiconBtn {
  icon: JSX.Element;
  label: string;
  borderColor?: string;
  bgColor?: string;
  size?: string;
}

const IconBtn = ({icon, label, borderColor, bgColor, size}: IiconBtn) => {
  return (
    <IconButton
      borderRadius={'50%'}
      bg="#fff"
      m={1}
      _active={{
        bg: bgColor ?? '#efefef',
        transform: 'scale(0.98)',
        borderColor: borderColor ?? '#efefef',
      }}
      _focus={{
        boxShadow: `0 0 1px 2px ${
          borderColor ?? '#efefef'
        }, 0 1px 1px rgba(0, 0, 0, .15)`,
      }}
      width={size ?? '35px'}
      height={size ?? '35px'}
      icon={icon}
      aria-label={label}
    />
  );
};

export default IconBtn;
