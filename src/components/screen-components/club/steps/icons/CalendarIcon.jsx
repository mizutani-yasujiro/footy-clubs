import React from 'react';
import PropTypes from 'prop-types';
import { ACCENT_THEME_COLOR, BORDER_COLOR } from '../../../../../constants/themeColors';

const CalendarIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="45.001" height="45" viewBox="0 0 45.001 45">
    <path
      id="Icon_ionic-md-calendar"
      data-name="Icon ionic-md-calendar"
      d="M43.126,31.875H31.876v11.25h11.25ZM39.376,7.5v3.75H20.626V7.5H15v3.75H12.187A4.7,4.7,0,0,0,7.5,15.938V47.813A4.7,4.7,0,0,0,12.187,52.5H47.813A4.7,4.7,0,0,0,52.5,47.813V15.938a4.7,4.7,0,0,0-4.687-4.687H45V7.5Zm8.438,40.313H12.187V22.969H47.813Z"
      transform="translate(-7.499 -7.5)"
      fill={active ? ACCENT_THEME_COLOR : BORDER_COLOR}
    />
  </svg>
);

CalendarIcon.propTypes = {
  active: PropTypes.bool,
};

CalendarIcon.defaultProps = {
  active: false,
};

export default CalendarIcon;
