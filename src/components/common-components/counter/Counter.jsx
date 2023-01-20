import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BORDER_COLOR } from '../../../constants/themeColors';
import Text14 from '../text/text-14/Text14';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';

const CountFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.small ? '6px' : '10px')};
  min-width: ${(props) => (props.small ? '30px' : '50px')};
  margin: 0 20px 5px 0;
  min-height: ${(props) => (props.small ? '30px' : '50px')};
  border: 1px solid ${BORDER_COLOR};
  font-size: ${(props) => (props.small ? '12px' : '1em')};
`;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const Counter = ({ date, small }) => {
  const staticDateNow = new Date().getTime();
  const staticDateGap = date.getTime() - staticDateNow;

  const [time, setTime] = useState({
    d: Math.floor(staticDateGap / day),
    m: Math.floor((staticDateGap % hour) / minute),
    h: Math.floor((staticDateGap % day) / hour),
    s: Math.floor((staticDateGap % minute) / second),
  });

  const countDown = useCallback(
    (cb) => {
      const now = new Date().getTime();
      const gap = date.getTime() - now;
      const d = Math.floor(gap / day);
      const m = Math.floor((gap % hour) / minute);
      const h = Math.floor((gap % day) / hour);
      const s = Math.floor((gap % minute) / second);

      if (d > 0 || m > 0 || h > 0 || s > 0) {
        setTime({ d, m, h, s });
      } else {
        setTime({ d: 0, m: 0, h: 0, s: 0 });
        cb();
      }
    },
    [date],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      countDown(() => clearInterval(interval));
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <>
      <RowWrapper>
        <ColumnWrapper autoWidth>
          <CountFrame small={small}>{time.d}</CountFrame>
          <Text14 style={small ? { fontSize: '10px' } : null}>Days</Text14>
        </ColumnWrapper>
        <ColumnWrapper autoWidth>
          <CountFrame small={small}>{time.h}</CountFrame>
          <Text14 style={small ? { fontSize: '10px' } : null}>Hours</Text14>
        </ColumnWrapper>
        <ColumnWrapper autoWidth>
          <CountFrame small={small}>{time.m}</CountFrame>
          <Text14 style={small ? { fontSize: '10px' } : null}>Minutes</Text14>
        </ColumnWrapper>
        <ColumnWrapper autoWidth>
          <CountFrame small={small}>{time.s}</CountFrame>
          <Text14 style={small ? { fontSize: '10px' } : null}>Seconds</Text14>
        </ColumnWrapper>
      </RowWrapper>
    </>
  );
};

Counter.propTypes = {
  date: PropTypes.instanceOf(Date),
};

Counter.defaultProps = {
  date: new Date('Jan 31, 2021 00:00:00'),
};

export default Counter;
