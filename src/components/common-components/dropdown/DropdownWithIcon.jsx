import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import Dropdown from './Dropdown';

const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
`;

const DropdownWithIcon = ({ placeholder, icon, data, onSelect, selectedItem}) => (
  <RowWrapper style={{ marginBottom: '20px', alignItems: 'flex-start' }}>
    <ImgWrapper>
      <img
        style={{ alignSelf: 'center', margin: '7px 20px 0 0', maxWidth: 30 }}
        src={icon}
        alt="dropdown"
      />
    </ImgWrapper>
    <Dropdown onSelect={(i) => onSelect(i)} data={data} selectedItem={selectedItem} placeholder={placeholder} />
  </RowWrapper>
);

DropdownWithIcon.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
      ]),
    ),
  ),
};

DropdownWithIcon.defaultProps = {
  data: [],
  onSelect: () => {},
};

export default DropdownWithIcon;
