import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { APP_BACKGROUND_COLOR, ACCENT_THEME_COLOR } from '../../../../../../constants/themeColors';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';

const ResultItem = styled(ColumnWrapper)`
  padding-bottom: 10px;
  min-width: 250px;
`;

const Wrapper = styled(RowWrapper)`
  padding: 10px 30px;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  background: ${APP_BACKGROUND_COLOR};
  border: 2px solid ${(props) => (props.isSelected ? ACCENT_THEME_COLOR : 'transparent')};
  cursor: pointer;
  transition: 0.15s ease-in-out all;
  &:hover {
    transform: scale(0.96);
  }
`;

const MatchResultItem = ({ teamA, teamB, score, isToday, date, clubName, isSelected }) => {
  return (
    <>
      <ResultItem>
        <Text16 bold>{clubName}</Text16>
        <Wrapper isSelected={isSelected}>
          <Text14>{teamA}</Text14>
          <Text16 bold>{!score ? 'VS' : score}</Text16>
          <Text14>{teamB}</Text14>
        </Wrapper>
        <Text16 style={{ alignSelf: 'flex-end' }} bold>
          {isToday ? 'TODAY' : date}
        </Text16>
      </ResultItem>
    </>
  );
};

MatchResultItem.propTypes = {
  clubName: PropTypes.string.isRequired,
  teamA: PropTypes.string.isRequired,
  teamB: PropTypes.string.isRequired,
  score: PropTypes.string,
  isToday: PropTypes.bool,
  isSelected: PropTypes.bool,
  date: PropTypes.string.isRequired,
};

MatchResultItem.deafultProps = {
  isToday: false,
  isSelected: false,
};

export default MatchResultItem;
