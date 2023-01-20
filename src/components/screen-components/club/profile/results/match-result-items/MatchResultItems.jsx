import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MatchResultItem from '../match-result-item/MatchResultItem';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';

const MatchResultItems = ({ data }) => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <ColumnWrapper>
        {data.map(({ date, isToday, score, teamA, teamB, clubName }, i) => (
          <div key={`item${i}`} onClick={() => setSelected(i)}>
            <MatchResultItem
              isToday={isToday}
              score={score}
              date={date}
              isSelected={selected === i}
              teamA={teamA}
              teamB={teamB}
              clubName={clubName}
            />
          </div>
        ))}
      </ColumnWrapper>
    </>
  );
};

MatchResultItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
      PropTypes.bool,
    ]),
  ).isRequired,
};

export default MatchResultItems;
