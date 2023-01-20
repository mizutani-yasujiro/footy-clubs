import React, { useState } from 'react';
import uniqid from 'uniqid';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text24 from '../../../../common-components/text/text-24/Text24';
import styled from 'styled-components';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import { BORDER_COLOR, ACCENT_THEME_COLOR } from '../../../../../constants/themeColors';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Button from '../../../../common-components/buttons/button/Button';
import { useHistory } from 'react-router-dom';

const Wrapper = styled(BorderContainer)`
  max-width: 500px;
  padding: 50px 100px;
  @media (max-width: 1200px) {
    max-width: unset;
    margin: 20px;
  }
`;

const ClubItem = styled(RowWrapper)`
  border: 2px solid ${(props) => (props.isSelected ? ACCENT_THEME_COLOR : BORDER_COLOR)};
  padding: 5px 10px;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;
  justify-content: space-between;
  transition: 0.2s ease-in-out all;
  &:hover {
    transform: scale(0.99);
    opacity: 0.8;
    border-color: ${ACCENT_THEME_COLOR};
  }
`;

const Arrow = styled.div`
  width: 10px;
  height: 10px;
  position: relative;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 3px;
    background: ${(props) => (props.isSelected ? ACCENT_THEME_COLOR : BORDER_COLOR)};
    transition: 0.2s ease-in-out all;
  }
  &:before {
    top: 1px;
    transform: rotate(45deg);
  }
  &:after {
    bottom: 1px;
    transform: rotate(-45deg);
  }
`;

const clubsMock = [
  {
    name: 'Tuesday Night Footbal',
    id: uniqid(),
  },
  {
    name: 'King Footers',
    id: uniqid(),
  },
  {
    name: 'Street Goons',
    id: uniqid(),
  },
  {
    name: 'Monkeys',
    id: uniqid(),
  },
];

const Clubs = () => {
  const [selected, setSelected] = useState(null);
  const { push } = useHistory();
  return (
    <Wrapper>
      <ColumnWrapper>
        <Text24 style={{ marginBottom: 10 }}>My clubs list</Text24>
        {clubsMock.map((club) => (
          <ClubItem
            isSelected={selected && selected.id === club.id}
            key={club.id}
            onClick={() => setSelected(club)}>
            <Text14
              style={{
                transition: '.15s ease-in-out all',
                color: selected && selected.id === club.id ? '#404040' : BORDER_COLOR,
              }}>
              {club.name}
            </Text14>
            <Arrow isSelected={selected && selected.id === club.id} />
          </ClubItem>
        ))}
        <Button
          disabled={!selected}
          onClick={() => push(`/clubs/${selected.id}/profile`)}
          style={{ marginTop: 20 }}>
          Go to club site
        </Button>
      </ColumnWrapper>
    </Wrapper>
  );
};

export default Clubs;
