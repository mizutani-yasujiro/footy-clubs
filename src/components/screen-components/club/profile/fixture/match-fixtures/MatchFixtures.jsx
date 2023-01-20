import React from 'react';
import PropTypes from 'prop-types';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import MatchFixtureItem from '../match-fixture-item/MatchFixtureItem';

const MatchFixtures = ({ data }) => {
  return (
    <>
      <ColumnWrapper>
        {data.map(({ date, time, day }, i) => (
          <MatchFixtureItem
            key={`item${i}`}
            isEven={i % 2 === 0}
            isFirst={i === 0}
            date={date}
            time={time}
            day={day}
          />
        ))}
      </ColumnWrapper>
    </>
  );
};

MatchFixtures.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default MatchFixtures;
