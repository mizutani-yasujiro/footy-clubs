import React from 'react';
import PropTypes from 'prop-types';
import { ACCENT_THEME_COLOR, BORDER_COLOR } from '../../../../../constants/themeColors';

const CardIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51.414"
    height="38.561"
    viewBox="0 0 51.414 38.561">
    <path
      id="Icon_metro-credit-card"
      data-name="Icon metro-credit-card"
      d="M50.879,9.64H9.1a4.834,4.834,0,0,0-4.82,4.82V43.381A4.834,4.834,0,0,0,9.1,48.2H50.879a4.834,4.834,0,0,0,4.82-4.82V14.46A4.834,4.834,0,0,0,50.879,9.64ZM9.1,12.854H50.879a1.628,1.628,0,0,1,1.607,1.607v4.82H7.5V14.46A1.628,1.628,0,0,1,9.1,12.854ZM50.879,44.987H9.1A1.628,1.628,0,0,1,7.5,43.381V28.921H52.485v14.46a1.628,1.628,0,0,1-1.607,1.607Zm-40.167-9.64h3.213v6.427H10.711Zm6.427,0h3.213v6.427H17.138Zm6.427,0h3.213v6.427H23.565Z"
      transform="translate(-4.285 -9.64)"
      fill={active ? ACCENT_THEME_COLOR : BORDER_COLOR}
    />
  </svg>
);

CardIcon.propTypes = {
  active: PropTypes.bool,
};

CardIcon.defaultProps = {
  active: false,
};

export default CardIcon;
