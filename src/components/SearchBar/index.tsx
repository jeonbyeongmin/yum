import styled from '@emotion/styled';
import {SearchIcon} from 'components/Icon';
import React from 'react';

function SearchBar() {
  return (
    <Wrapper>
      <SearchIcon />
      <Input placeholder="레시피를 입력해주세요" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #c5c5c5;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
`;

const Input = styled.input`
  width: 250px;
  margin-left: 5px;
  padding: 0px;
  font-size: 14px;
  border: none;
`;

export default SearchBar;
