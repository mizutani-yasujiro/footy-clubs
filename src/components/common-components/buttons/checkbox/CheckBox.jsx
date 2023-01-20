import styled from 'styled-components';
import React from 'react';
import { ACCENT_THEME_COLOR } from '../../../../constants/themeColors';
import Text12 from '../../text/text-12/Text12';
import RowWrapper from '../../wrappers/row-wrapper/RowWrapper';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
`;

const Box = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Overlay = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${ACCENT_THEME_COLOR};
  border-radius: 2px;
  cursor: pointer;
  background: none;
  outline: none;
  &:after {
    opacity: ${(props) => (props.checked ? 1 : 0)};
    content: '';
    position: absolute;
    top: 50%;
    left: 45%;
    width: 4px;
    height: 8px;
    border-radius: 2px;
    border-right: 2px solid ${ACCENT_THEME_COLOR};
    border-bottom: 2px solid ${ACCENT_THEME_COLOR};
    transform: rotate(40deg) translate(-100%, -40%);
    transition: ease-in-out 0.15s opacity;
  }
`;

const StyledText12 = styled(Text12)`
  margin-left: 25px;
  color: black;
`;

const StyledRowWrapper = styled(RowWrapper)`
  align-items: center;
  cursor: pointer;
`;

const CheckBox = ({ isChecked, text, onCheck }) => (
  <>
    <StyledRowWrapper onClick={onCheck}>
      <Wrapper>
        <Box type="checkbox" checked={isChecked} onChange={onCheck} />
        <Overlay type="button" checked={isChecked} />
      </Wrapper>
      <StyledText12>{text}</StyledText12>
    </StyledRowWrapper>
  </>
);

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

CheckBox.defaultProps = {
  isChecked: false,
};

export default CheckBox;
