import React, { useState } from 'react';
import styled from 'styled-components';
import usersMock from '../../../../../mocks/usersMock';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';

const LineUpWrapper = styled(ColumnWrapper)`
  align-items: center;
`;

const user = usersMock[0];

const LineUp = ({ noEdit }) => {
  const [selectedPlus, setSelectedPlus] = useState('');

  const handleSelectUser = (id) => {
    if (!noEdit) {
      if (selectedPlus) {
        document.getElementById(selectedPlus.img).remove();
        document.getElementById(selectedPlus.id).style.opacity = '1';
      }
      const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
      wrapper.innerHTML = `
          <img src="${user.img}" style="width: 24px; height: 24px; object-fit: cover; border-radius: 60%"></img>
      `;

      const path = document.getElementById(id);
      const dValue = path.getAttribute('d');
      const transformValue = path.getAttribute('transform');
      const group = document.getElementById('line-up');
      wrapper.setAttribute('d', dValue);
      wrapper.setAttribute('id', `imgId${id}`);
      wrapper.setAttribute('transform', transformValue);
      wrapper.setAttribute('width', '24');
      wrapper.setAttribute('height', '24');
      setSelectedPlus({ img: `imgId${id}`, id });
      path.style.opacity = '0';
      group.appendChild(wrapper);
    }
  };

  return (
    <LineUpWrapper>
      <ColumnWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 351 494">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="1"
              gradientUnits="objectBoundingBox">
              <stop offset="0" stopColor="#1dbf73" />
              <stop offset="1" stopColor="#41d18d" />
            </linearGradient>
            <clipPath id="clip">
              <use xlinkHref="#fill" />
            </clipPath>
          </defs>
          <g id="line-up" data-name="Group 351" transform="translate(-1190 -651)">
            <g
              id="Rectangle_193"
              data-name="Rectangle 193"
              transform="translate(1190 651)"
              stroke="#e2e2e2"
              strokeLinecap="square"
              strokeWidth="2"
              fill="url(#linear-gradient)">
              <rect width="351" height="494" rx="12" stroke="none" />
              <rect x="1" y="1" width="349" height="492" rx="11" fill="none" />
            </g>
            <g
              id="Ellipse_29"
              data-name="Ellipse 29"
              transform="translate(1337 870)"
              fill="#33ca83"
              stroke="#e2e2e2"
              strokeWidth="2">
              <ellipse cx="29" cy="28.5" rx="29" ry="28.5" stroke="none" />
              <ellipse cx="29" cy="28.5" rx="28" ry="27.5" fill="none" />
            </g>
            <g
              id="Ellipse_30"
              data-name="Ellipse 30"
              transform="translate(1337 683)"
              fill="#1dbf73"
              stroke="#e2e2e2"
              strokeWidth="2">
              <ellipse cx="29" cy="28.5" rx="29" ry="28.5" stroke="none" />
              <ellipse cx="29" cy="28.5" rx="28" ry="27.5" fill="none" />
            </g>
            <g
              id="Rectangle_196"
              data-name="Rectangle 196"
              transform="translate(1190 897.71)"
              fill="#e2e2e2"
              stroke="#e2e2e2"
              strokeWidth="1">
              <rect id="fill" width="350.678" height="0.639" stroke="none" />
              <path
                d="M0,0.1391465663909912h350.67840576171875M350.17840576171875,0v0.6391465663909912M350.67840576171875,0.5h-350.67840576171875M0.5,0.6391465663909912v-0.6391465663909912"
                fill="none"
                clipPath="url(#clip)"
              />
            </g>
            <rect
              id="Rectangle_197"
              data-name="Rectangle 197"
              width="190"
              height="68"
              rx="2"
              transform="translate(1271 651)"
              fill="#1dbf73"
            />
            <g
              id="Ellipse_31"
              data-name="Ellipse 31"
              transform="translate(1337 1056)"
              fill="#3bce88"
              stroke="#e2e2e2"
              strokeWidth="2">
              <ellipse cx="29" cy="30" rx="29" ry="30" stroke="none" />
              <ellipse cx="29" cy="30" rx="28" ry="29" fill="none" />
            </g>
            <rect
              id="Rectangle_198"
              data-name="Rectangle 198"
              width="190"
              height="68"
              rx="2"
              transform="translate(1271 1077)"
              fill="#3dcf8a"
            />
            <g
              id="Rectangle_194"
              data-name="Rectangle 194"
              transform="translate(1314 651)"
              fill="#1dbf73"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2">
              <rect width="103" height="35" stroke="none" />
              <rect x="1" y="1" width="101" height="33" fill="none" />
            </g>
            <line
              id="Line_123"
              data-name="Line 123"
              y2="65.513"
              transform="translate(1271.006 653.213)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_125"
              data-name="Line 125"
              y2="65.513"
              transform="translate(1459.575 653.213)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_124"
              data-name="Line 124"
              x1="188.57"
              transform="translate(1271.006 718.726)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_126"
              data-name="Line 126"
              y1="65.513"
              transform="translate(1271.006 1078.16)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_130"
              data-name="Line 130"
              y1="32.756"
              transform="translate(1314.385 1110.916)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_131"
              data-name="Line 131"
              y1="32.756"
              transform="translate(1415.311 1110.916)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_127"
              data-name="Line 127"
              y1="65.513"
              transform="translate(1459.575 1078.16)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_128"
              data-name="Line 128"
              x1="188.57"
              transform="translate(1271.006 1078.16)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_129"
              data-name="Line 129"
              x1="100.925"
              transform="translate(1314.385 1110.916)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <g
              id="Rectangle_291"
              data-name="Rectangle 291"
              transform="translate(1190 651)"
              fill="none"
              stroke="#1dbf73"
              strokeLinecap="square"
              strokeWidth="2">
              <rect width="351" height="494" rx="12" stroke="none" />
              <rect x="1" y="1" width="349" height="492" rx="11" fill="none" />
            </g>
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus22')}
              id="plus22"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1354.549 674)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus21')}
              id="plus21"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1484.549 720)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus20')}
              id="plus20"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1454.549 772)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus19')}
              id="plus19"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1485.549 826)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus18')}
              id="plus18"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1419.549 824)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus17')}
              id="plus17"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1359.549 858)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus16')}
              id="plus16"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1354.549 772)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus15')}
              id="plus15"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1336.549 906)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus14')}
              id="plus14"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1219.549 728)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus13')}
              id="plus13"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1224.549 827)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus12')}
              id="plus12"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1225.549 925)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus11')}
              id="plus11"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1255.549 977)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus10')}
              id="plus10"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1355.549 977)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus9')}
              id="plus9"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1455.549 977)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus8')}
              id="plus8"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1489.549 932)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus7')}
              id="plus7"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1485.549 1031)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus6')}
              id="plus6"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1406.549 1015)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus5')}
              id="plus5"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1289.549 1028)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus4')}
              id="plus4"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1355.549 1100)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus3')}
              id="plus3"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1224.549 1033)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus2')}
              id="plus2"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1254.549 772)"
              fill="#fff"
            />
            <path
              style={{ cursor: noEdit ? 'auto' : 'pointer' }}
              onClick={() => handleSelectUser('plus1')}
              id="plus1"
              d="M10.656.344A10.656,10.656,0,1,0,21.313,11,10.654,10.654,0,0,0,10.656.344Zm0,4.125A3.781,3.781,0,1,1,6.875,8.25,3.781,3.781,0,0,1,10.656,4.469Zm0,14.781a8.234,8.234,0,0,1-6.295-2.93,4.791,4.791,0,0,1,4.232-2.57A1.051,1.051,0,0,1,8.9,13.8a5.689,5.689,0,0,0,1.757.3,5.668,5.668,0,0,0,1.757-.3,1.051,1.051,0,0,1,.305-.047,4.791,4.791,0,0,1,4.232,2.57A8.234,8.234,0,0,1,10.656,19.25Z"
              transform="translate(1302.549 810)"
              fill="#fff"
            />
          </g>
        </svg>
      </ColumnWrapper>
    </LineUpWrapper>
  );
};

LineUp.propTypes = {};

export default LineUp;
