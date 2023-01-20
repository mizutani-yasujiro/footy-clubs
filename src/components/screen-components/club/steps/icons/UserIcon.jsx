import React from 'react';
import PropTypes from 'prop-types';
import { ACCENT_THEME_COLOR, BORDER_COLOR } from '../../../../../constants/themeColors';

const UserIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45 50">
    <g id="Group_142" data-name="Group 142" transform="translate(-311.9 -172.5)">
      <path
        id="Path_142"
        data-name="Path 142"
        d="M50,52.5v-5a10,10,0,0,0-10-10H20a10,10,0,0,0-10,10v5"
        transform="translate(304.4 167.5)"
        fill="none"
        stroke={active ? ACCENT_THEME_COLOR : BORDER_COLOR}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        id="Path_143"
        data-name="Path 143"
        d="M40,17.5a10,10,0,1,1-10-10A10,10,0,0,1,40,17.5Z"
        transform="translate(304.4 167.5)"
        fill="none"
        stroke={active ? ACCENT_THEME_COLOR : BORDER_COLOR}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </g>
  </svg>
);

UserIcon.propTypes = {
  active: PropTypes.bool,
};

UserIcon.defaultProps = {
  active: false,
};

export default UserIcon;
