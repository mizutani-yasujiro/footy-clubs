import React from 'react';
import PropTypes from 'prop-types';
import RowWrapper from '../../wrappers/row-wrapper/RowWrapper';
import styled from 'styled-components';
import { BORDER_COLOR, ACCENT_THEME_COLOR } from '../../../../constants/themeColors';
import Text14 from '../../text/text-14/Text14';

const RadioButton = ({ title, onClick, active }) => {
  const Circle = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 2px solid ${active ? ACCENT_THEME_COLOR : BORDER_COLOR};
    margin-right: 10px;
    transition: 0.2s ease-in-out all;
    &:hover {
      transform: scale(0.9);
    }
  `;

  return (
    <>
      <RowWrapper
        style={{ cursor: 'pointer', alignItems: 'center', marginTop: 5 }}
        onClick={onClick}>
        <Circle />
        <Text14 bold={active} style={{ color: active ? ACCENT_THEME_COLOR : '#404040' }}>
          {title}
        </Text14>
      </RowWrapper>
    </>
  );
};

RadioButton.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RadioButton;
