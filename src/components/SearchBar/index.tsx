import React, {useRef, useState} from 'react';
import styled from '@emotion/styled';
import {SearchIcon} from 'components/Icon';
import { media } from 'styles/theme';

function SearchBar() {
  const [active, setActive] = useState(false);

  const handleFocusBlur = () => {
    setActive(prev => !prev);
  };

  return (
    <Wrapper active={active}>
      <SearchIcon  />
      <Input
        placeholder="레시피를 입력해주세요"
        onFocus={handleFocusBlur}
        onBlur={handleFocusBlur}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<{active: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
  border: 1px solid ${props => (props.active ? 'black' : '#b0b0b0')};
  color: ${props => (props.active ? 'black' : '#b0b0b0')};

`;

const Input = styled.input`
  width: 210px; 
  max-width: 250px;
  margin-left: 10px;
  padding: 0px;
  font-size: 14px;
  border: none;
`;

export default SearchBar;
