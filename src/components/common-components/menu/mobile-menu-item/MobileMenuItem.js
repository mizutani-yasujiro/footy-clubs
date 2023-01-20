import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MAIN_THEME_COLOR } from '../../../../constants/themeColors';

const Item = styled(NavLink)`
  color: #404040;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  transition: 0.2s ease-in-out all;
  &:hover {
    opacity: .7;
  }
`;

const MobileMenuItem = ({ to, label, onClick }) => {
  return (
    <li onClick={onClick} style={{ marginBottom: '16px' }}>
      <Item exact to={to} activeStyle={{
        fontWeight: '600',
        borderBottom: `2px solid ${MAIN_THEME_COLOR}`
      }}>
        {label}
      </Item>
    </li>
  )
};

MobileMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}



export default MobileMenuItem;