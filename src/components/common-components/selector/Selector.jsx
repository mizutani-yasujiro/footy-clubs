import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ACCENT_THEME_COLOR, BORDER_COLOR } from '../../../constants/themeColors';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import Text12 from '../text/text-12/Text12';
import ButtonText from '../buttons/button-text/ButtonText';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';

const SelectWrapper = styled(ColumnWrapper)`
  position: relative;
`;

const ListItem = styled.div`
  background: ${(props) => (props.white ? '#FFFFFF' : '#F2F2F2')};
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  margin: 2px 0;
  border: 2px solid ${(props) => (props.isSelected ? ACCENT_THEME_COLOR : 'transparent')};
  &:focus {
    opacity: 0.9;
  }
  &:first-child: {
    margin: 0 0 2px;
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
  max-height: 300px;
  min-width: 200px;
  overflow: hidden;
  position: absolute;
  background: #ffffff;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${BORDER_COLOR};
  padding 5px;
  font-size: 12px;
  color: #404040;
  font-weight: normal;
  font-family: 'Montserrat', sans-serif;
`;

const UserInfoWrapper = styled(RowWrapper)`
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 60%;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
`;

const Selector = ({ data, multiple, placeholder, icon, selectedPlayablePositions, setSelectedPlayablePositions }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  //const [selecItems, setSelecItems] = useState(data);
  const selectRef = useRef();

  const selectItem = (item) => {
    const filteredArray = selectedPlayablePositions.map((i) => {
      if (i.key === item.key) {
        if (!item.selected) {
          return { ...i, selected: true };
        }
        return { ...i, selected: false };
      }
      return i;
    });
    setSelectedPlayablePositions(filteredArray);
  };

  const selectSingleItem = (item) => {
    const filteredArray = selectedPlayablePositions.map((i) => {
      if (i.key === item.key) {
        return { ...i, selected: true };
      }
      return { ...i, selected: false };
    });
    setSelectedPlayablePositions(filteredArray);
  };

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

  const countSelected = () => {
    const count = selectedPlayablePositions.filter((item) => item.selected);
    if (count) return count.length;
    return null;
  };

  return (
    <>
      <SelectWrapper>
        <RowWrapper style={{ marginBottom: '20px', alignItems: 'flex-start' }}>
          <ImgWrapper>
            <img
              style={{ alignSelf: 'center', margin: '14px 20px 0 0' }}
              src={icon}
              alt="dropdown"
            />
          </ImgWrapper>
          <ButtonText style={{ width: '100%' }} onClick={() => setIsExpanded(!isExpanded)}>
            {countSelected() ? (
              <StyledButton>Selected: {countSelected()}</StyledButton>
            ) : (
              <StyledButton>{placeholder}</StyledButton>
            )}
          </ButtonText>
        </RowWrapper>

        <Wrapper>
          {isExpanded && selectedPlayablePositions && selectedPlayablePositions.length ? (
            <List ref={selectRef}>
              {selectedPlayablePositions.map((item, i) => (
                <ListItem
                  isSelected={item.selected || false}
                  key={item.key}
                  onClick={() => (multiple ? selectItem(item) : selectSingleItem(item))}
                  white={i % 2 === 0}>
                  <UserInfoWrapper>
                    <Text12>{item.value}</Text12>
                  </UserInfoWrapper>
                </ListItem>
              ))}
            </List>
          ) : null}
        </Wrapper>
      </SelectWrapper>
    </>
  );
};

Selector.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ),
  multiple: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

Selector.defaultProps = {
  data: [],
  multiple: true,
  placeholder: '',
};

export default Selector;
