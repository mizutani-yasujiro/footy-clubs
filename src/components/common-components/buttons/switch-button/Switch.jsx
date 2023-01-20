import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { ACCENT_THEME_COLOR, BORDER_COLOR } from '../../../../constants/themeColors';
import RowWrapper from '../../wrappers/row-wrapper/RowWrapper';
import Text14 from '../../text/text-14/Text14';

const SwitchBackground = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  border: 2px solid ${BORDER_COLOR};
  background: ${(props) => (props.isOn ? ACCENT_THEME_COLOR : '#D1D1D1')};
`;

const SwitchButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 60%;
  background: #fff;
  transition: 0.2s ease-in-out all;
  transform: ${(props) => (props.isOn ? 'translateX(24px)' : 'translateX(0)')};
`;

const Switch = ({ isOn, onChange, text }) => {
  return (
    <RowWrapper style={{ alignItems: 'center' }} autoWidth>
      <Text14 style={{ marginRight: 10 }}>{text}</Text14>
      <SwitchBackground onClick={() => onChange()} isOn={isOn}>
        <SwitchButton isOn={isOn} />
      </SwitchBackground>
    </RowWrapper>
  );
};

Switch.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Switch;
