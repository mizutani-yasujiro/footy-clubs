import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../../assets/icons/searchIcon.svg';
import { BORDER_COLOR } from '../../../constants/themeColors';
import Text12 from '../text/text-12/Text12';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';

const ListItem = styled.div`
  background: ${(props) => (props.white ? '#FFFFFF' : '#F2F2F2')};
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  &:focus {
    opacity: 0.9;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: white;
  max-height: 250px;
  height: auto;
  top: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  z-index: 2;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  padding: 8px 10px 8px 40px;
  outline: none;
  background: #f5f5f5;
  border: 1px solid ${BORDER_COLOR};
  border-radius: 60px;
  transition: 0.2s ease-in-out all;
  @media (max-width: 654px) {
    max-width: 180px;
  }
`;

const SearchI = styled.img`
  position: absolute;
  top: 8px;
  left: 18px;
`;

function SearchBar({ onChange, searchVal, data, onSelect, placeholder }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [firstMount, setFirstMount] = useState(true);
  const selectRef = useRef();
  const inputRef = useRef();

  const selectItem = (item) => {
    setIsExpanded(false);
    onSelect(item);
  };

  const onTyping = (v) => {
    setIsFetching(true);
    onChange(v);
  };

  useEffect(() => {
    setIsFetching(false);
  }, [data]);

  useEffect(() => {
    if (!firstMount && !isFetching && !inputRef.current.isFocused) {
      inputRef.current.focus();
      setIsExpanded(true);
    }
    if (firstMount) setFirstMount(false);
    // eslint-disable-next-line
  }, [isFetching]);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsExpanded(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(selectRef);

  return (
    <ColumnWrapper ref={selectRef} style={{ maxWidth: 500, position: 'relative' }}>
      <SearchI src={searchIcon} alt="search" />
      <Input
        ref={inputRef}
        placeholder={placeholder}
        onClick={() => setIsExpanded(!isExpanded)}
        value={searchVal}
        disabled={isFetching}
        onChange={({ target: { value } }) => onTyping(value)}
      />
      <ColumnWrapper style={{ position: 'relative' }}>
        <Wrapper>
          {isExpanded && data && data?.length ? (
            <List>
              {data.map((item, i) => (
                <ListItem key={item.key} onClick={() => selectItem(item)} white={i % 2 === 0}>
                  <Text12>{item.value}</Text12>
                </ListItem>
              ))}
            </List>
          ) : null}
        </Wrapper>
      </ColumnWrapper>
    </ColumnWrapper>
  );
}

export default SearchBar;
