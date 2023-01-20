import PropTypes from 'prop-types';
import React from 'react';
import RowWrapper from '../../wrappers/row-wrapper/RowWrapper';
import ButtonText from '../button-text/ButtonText';

const ButtonTextIcon = ({ title, icon, onClick, textColor, style }) => (
  <>
    <RowWrapper
      autoWidth
      style={{ cursor: 'pointer', justifyContent: 'flex-end', ...style }}
      onClick={onClick}>
      <img src={icon} alt={title} />
      <ButtonText style={textColor ? { color: textColor } : null}>{title}</ButtonText>
    </RowWrapper>
  </>
);

ButtonTextIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  textColor: PropTypes.string,
};

ButtonTextIcon.defaultProps = {
  textColor: '',
};

export default ButtonTextIcon;
