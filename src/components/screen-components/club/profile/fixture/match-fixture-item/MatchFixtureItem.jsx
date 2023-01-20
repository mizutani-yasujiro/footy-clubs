import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR, MAIN_THEME_COLOR } from '../../../../../../constants/themeColors';
import Text12 from '../../../../../common-components/text/text-12/Text12';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text18 from '../../../../../common-components/text/text-18/Text18';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';

const Wrapper = styled(RowWrapper)`
  padding: 20px 25px 15px;
  justify-content: space-between;
  position: relative;
  align-items: center;
  margin: 5px 0;
  background: ${(props) => (!props.isEven ? '#F3F3F3' : APP_BACKGROUND_COLOR)};
  border: 1px solid ${(props) => (props.isFirst ? MAIN_THEME_COLOR : 'transparent')};
`;

const ClubLabel = styled(Text12)`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const MatchFixtureItem = ({ date, time, day, isFirst, isEven, club }) => {
  return (
    <>
      {isFirst ? <Text18 style={{ marginBottom: 6 }}>Match Fixtures</Text18> : null}
      <Wrapper isFirst={isFirst} isEven={isEven}>
        <ClubLabel bold>{club}</ClubLabel>
        <Text14>{date}</Text14>
        <Text14>{time}</Text14>
        <Text14>{day}</Text14>
      </Wrapper>
    </>
  );
};

MatchFixtureItem.propTypes = {
  date: PropTypes.string.isRequired,
  club: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  isFirst: PropTypes.bool,
  isEven: PropTypes.bool.isRequired,
};

MatchFixtureItem.deafultProps = {
  isFirst: false,
};

export default MatchFixtureItem;
