import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MAIN_THEME_COLOR, BORDER_COLOR } from '../../../constants/themeColors';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import Text12 from '../text/text-12/Text12';

const Circle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.active ? MAIN_THEME_COLOR : BORDER_COLOR)};
  margin-right: 10px;
  transition: 0.2s ease-in-out all;
  &:hover {
    transform: scale(0.9);
  }
`;

const CheckInformation = ({ active, title }) => {
  return (
    <>
      <RowWrapper style={{ alignItems: 'center', padding: '2px 0' }}>
        <Circle active={active} />
        <Text12>{title}</Text12>
      </RowWrapper>
    </>
  );
};

CheckInformation.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default CheckInformation;
