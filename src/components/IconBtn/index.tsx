import {IconButton} from '@chakra-ui/react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import React, {ReactNode} from 'react';

interface IiconBtn {
  icon: JSX.Element;
  label: string;
  type?: string;
  borderColor?: string;
  bgColor?: string;
  size?: string;
}

const IconBtn = ({icon, label, type,borderColor, bgColor, size}: IiconBtn) => {
  const DisplayProps = type === 'mobile' ? {base:'inline-flex', md:'none'} : {base:'inline-flex'}
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
        boxShadow: 'none'
      }}
      width={size ?? '35px'}
      height={size ?? '35px'}
      icon={icon}
      aria-label={label}
      display={DisplayProps}
    />
  );
};

export default IconBtn;
