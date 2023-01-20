import React from 'react';
import PropTypes from 'prop-types';
import penIcon from '../../../../assets/icons/pencil.svg';
import ButtonTextIcon from '../button-text-icon/ButtonTextIcon';

const ButtonEdit = ({ onClick }) => (
  <>
    <ButtonTextIcon title="Edit" onClick={onClick} icon={penIcon} />
  </>
);

ButtonEdit.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonEdit;
