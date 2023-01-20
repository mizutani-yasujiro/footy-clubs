import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MAIN_THEME_COLOR } from '../../../../constants/themeColors';

const Item = styled(NavLink)`
  color: #404040;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  padding: 2px;
  margin: 0 20px;
  text-decoration: none;
  transition: 0.2s ease-in-out all;
  &:hover {
    opacity: .7;
  }
`;

const MenuItem = ({ to, label }) => (
  <li>
    <Item to={to} activeStyle={{
      fontWeight: '600',
      borderBottom: `2px solid ${MAIN_THEME_COLOR}`
    }}>
      {label}
    </Item>
  </li>
);

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}



export default MenuItem;