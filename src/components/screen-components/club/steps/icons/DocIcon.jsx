import React from 'react';
import PropTypes from 'prop-types';
import { ACCENT_THEME_COLOR, BORDER_COLOR } from '../../../../../constants/themeColors';

const DocIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44.987"
    height="51.414"
    viewBox="0 0 44.987 51.414">
    <path
      id="Icon_metro-file-text"
      data-name="Icon metro-file-text"
      d="M50.367,14.715A45.534,45.534,0,0,0,45.99,9.709a45.538,45.538,0,0,0-5.006-4.377c-2.589-1.9-3.846-2.119-4.565-2.119h-24.9A4.021,4.021,0,0,0,7.5,7.23V50.611a4.021,4.021,0,0,0,4.017,4.017H48.469a4.021,4.021,0,0,0,4.017-4.017V19.28c0-.72-.22-1.976-2.119-4.565Zm-6.649-2.734a43.825,43.825,0,0,1,3.644,4.086h-7.73V8.337a43.78,43.78,0,0,1,4.086,3.644Zm5.554,38.63a.814.814,0,0,1-.8.8H11.515a.814.814,0,0,1-.8-.8V7.23a.814.814,0,0,1,.8-.8h24.9V17.674a1.607,1.607,0,0,0,1.607,1.607H49.272V50.611Zm-8.033-5.623H18.745a1.607,1.607,0,1,1,0-3.213H41.238a1.607,1.607,0,0,1,0,3.213Zm0-6.427H18.745a1.607,1.607,0,1,1,0-3.213H41.238a1.607,1.607,0,1,1,0,3.213Zm0-6.427H18.745a1.607,1.607,0,1,1,0-3.213H41.238a1.607,1.607,0,0,1,0,3.213Z"
      transform="translate(-7.498 -3.213)"
      fill={active ? ACCENT_THEME_COLOR : BORDER_COLOR}
    />
  </svg>
);

DocIcon.propTypes = {
  active: PropTypes.bool,
};

DocIcon.defaultProps = {
  active: false,
};

export default DocIcon;
