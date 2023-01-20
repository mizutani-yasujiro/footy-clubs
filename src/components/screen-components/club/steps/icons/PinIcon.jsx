import React from 'react';
import PropTypes from 'prop-types';
import { ACCENT_THEME_COLOR, BORDER_COLOR } from '../../../../../constants/themeColors';

const PinIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32.134"
    height="51.414"
    viewBox="0 0 32.134 51.414">
    <path
      id="Icon_metro-location"
      data-name="Icon metro-location"
      d="M29.992,3.213A16.067,16.067,0,0,0,13.925,19.28c0,16.067,16.067,35.347,16.067,35.347S46.059,35.347,46.059,19.28A16.067,16.067,0,0,0,29.992,3.213Zm0,25.908a9.841,9.841,0,1,1,9.841-9.841A9.841,9.841,0,0,1,29.992,29.121ZM23.766,19.28a6.226,6.226,0,1,1,6.226,6.226A6.226,6.226,0,0,1,23.766,19.28Z"
      transform="translate(-13.925 -3.213)"
      fill={active ? ACCENT_THEME_COLOR : BORDER_COLOR}
    />
  </svg>
);

PinIcon.propTypes = {
  active: PropTypes.bool,
};

PinIcon.defaultProps = {
  active: false,
};

export default PinIcon;
