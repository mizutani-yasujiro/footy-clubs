import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ButtonEdit from '../../../../../common-components/buttons/button-edit/ButtonEdit';
import Button from '../../../../../common-components/buttons/button/Button';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Modal from './modal/Modal';

const LineUpWrapper = styled(ColumnWrapper)`
  align-items: center;
`;

const ButtonWrapper = styled(RowWrapper)`
  margin-top: 20px;
  align-items: center;
  justify-content: flex-end;
`;

const LineUp = () => {
  const [isEdited, setIsEdited] = useState(false);
  const [modalHidden, setModalHidden] = useState(true);
  const [selectedPlusId, setSelectedPlusId] = useState(false);

  const handleSelectUser = (u, id) => {
    const wrapper = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    wrapper.innerHTML = `
        <img src="${u.img}" style="width: 30px; height: 30px; object-fit: cover; border-radius: 60%"></img>
    `;

    const path = document.getElementById(id);
    const dValue = path.getAttribute('d');
    const transformValue = path.getAttribute('transform');
    const group = document.getElementById('line-up-new');
    wrapper.setAttribute('d', dValue);
    wrapper.setAttribute('transform', transformValue);
    wrapper.setAttribute('width', '30');
    wrapper.setAttribute('height', '30');
    path.remove();
    group.appendChild(wrapper);
    setModalHidden(true);
  };

  const showModal = (id) => {
    if (isEdited) {
      setSelectedPlusId(id);
      setModalHidden(false);
    }
  };

  const { push } = useHistory();

  const handleRedirect = async () => {
    await push({
      pathname: '/clubs/kchiegz0/profile',
      state: {
        renderStats: true,
      },
    });
    document.getElementById('clubResults').click();
    document.getElementById('lineUpClubStats').click();
  };

  return (
    <LineUpWrapper>
      {!modalHidden ? (
        <Modal id={selectedPlusId} onSelect={(u, id) => handleSelectUser(u, id)} />
      ) : null}
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
              <use href="#fill" />
            </clipPath>
          </defs>
          <g id="line-up-new" transform="translate(-1212 -872)">
            <g
              id="Rectangle_193"
              data-name="Rectangle 193"
              transform="translate(1212 872)"
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
              transform="translate(1359 1091)"
              fill="#33ca83"
              stroke="#e2e2e2"
              strokeWidth="2">
              <ellipse cx="29" cy="28.5" rx="29" ry="28.5" stroke="none" />
              <ellipse cx="29" cy="28.5" rx="28" ry="27.5" fill="none" />
            </g>
            <g
              id="Ellipse_30"
              data-name="Ellipse 30"
              transform="translate(1359 904)"
              fill="#1dbf73"
              stroke="#e2e2e2"
              strokeWidth="2">
              <ellipse cx="29" cy="28.5" rx="29" ry="28.5" stroke="none" />
              <ellipse cx="29" cy="28.5" rx="28" ry="27.5" fill="none" />
            </g>
            <g
              id="Rectangle_196"
              data-name="Rectangle 196"
              transform="translate(1212 1118.71)"
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
              transform="translate(1293 872)"
              fill="#1dbf73"
            />
            <g
              id="Ellipse_31"
              data-name="Ellipse 31"
              transform="translate(1359 1277)"
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
              transform="translate(1293 1298)"
              fill="#3dcf8a"
            />
            <g
              id="Rectangle_194"
              data-name="Rectangle 194"
              transform="translate(1336 872)"
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
              transform="translate(1293.005 874.213)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_125"
              data-name="Line 125"
              y2="65.513"
              transform="translate(1481.575 874.213)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_124"
              data-name="Line 124"
              x1="188.57"
              transform="translate(1293.005 939.726)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_126"
              data-name="Line 126"
              y1="65.513"
              transform="translate(1293.005 1299.16)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_130"
              data-name="Line 130"
              y1="32.756"
              transform="translate(1336.385 1331.916)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_131"
              data-name="Line 131"
              y1="32.756"
              transform="translate(1437.31 1331.916)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_127"
              data-name="Line 127"
              y1="65.513"
              transform="translate(1481.575 1299.16)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_128"
              data-name="Line 128"
              x1="188.57"
              transform="translate(1293.005 1299.16)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <line
              id="Line_129"
              data-name="Line 129"
              x1="100.925"
              transform="translate(1336.385 1331.916)"
              fill="none"
              stroke="#e2e2e2"
              strokeLinecap="round"
              strokeWidth="2"
            />
            <g
              id="Rectangle_291"
              data-name="Rectangle 291"
              transform="translate(1212 872)"
              fill="none"
              stroke="#1dbf73"
              strokeLinecap="square"
              strokeWidth="2">
              <rect width="351" height="494" rx="12" stroke="none" />
              <rect x="1" y="1" width="349" height="492" rx="11" fill="none" />
            </g>
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus1')}
              id="plus1"
              d="M12.593,6.815H10.667v3.852H6.815v1.926h3.852v3.852h1.926V12.593h3.852V10.667H12.593ZM11.63,2a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,11.63,2Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,11.63,19.334Z"
              transform="translate(1376.044 895.576)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus22')}
              id="plus22"
              d="M12.593,6.815H10.667v3.852H6.815v1.926h3.852v3.852h1.926V12.593h3.852V10.667H12.593ZM11.63,2a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,11.63,2Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,11.63,19.334Z"
              transform="translate(1375.589 992.921)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus21')}
              id="plus21"
              d="M12.593,6.815H10.667v3.852H6.815v1.926h3.852v3.852h1.926V12.593h3.852V10.667H12.593ZM11.63,2a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,11.63,2Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,11.63,19.334Z"
              transform="translate(1475.884 992.921)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus20')}
              id="plus20"
              d="M12.593,6.815H10.667v3.852H6.815v1.926h3.852v3.852h1.926V12.593h3.852V10.667H12.593ZM11.63,2a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,11.63,2Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,11.63,19.334Z"
              transform="translate(1275.294 992.921)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus19')}
              id="plus19"
              d="M10.667,6.815h1.926v3.852h3.852v1.926H12.593v3.852H10.667V12.593H6.815V10.667h3.852ZM11.63,2A9.63,9.63,0,1,1,2,11.63,9.634,9.634,0,0,1,11.63,2Zm0,17.334a7.7,7.7,0,1,0-7.7-7.7A7.714,7.714,0,0,0,11.63,19.334Z"
              transform="translate(1376.435 1197.935)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus18')}
              id="plus18"
              d="M10.667,6.815h1.926v3.852h3.852v1.926H12.593v3.852H10.667V12.593H6.815V10.667h3.852ZM11.63,2A9.63,9.63,0,1,1,2,11.63,9.634,9.634,0,0,1,11.63,2Zm0,17.334a7.7,7.7,0,1,0-7.7-7.7A7.714,7.714,0,0,0,11.63,19.334Z"
              transform="translate(1276.14 1197.935)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus17')}
              id="plus17"
              d="M10.667,6.815h1.926v3.852h3.852v1.926H12.593v3.852H10.667V12.593H6.815V10.667h3.852ZM11.63,2A9.63,9.63,0,1,1,2,11.63,9.634,9.634,0,0,1,11.63,2Zm0,17.334a7.7,7.7,0,1,0-7.7-7.7A7.714,7.714,0,0,0,11.63,19.334Z"
              transform="translate(1476.729 1197.935)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus16')}
              id="plus16"
              d="M10.593,4.815H8.667V8.667H4.815v1.926H8.667v3.852h1.926V10.593h3.852V8.667H10.593ZM9.63,0a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,9.63,0Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,9.63,17.334Z"
              transform="translate(1507.895 943.588)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus15')}
              id="plus15"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1248.381 1147.718)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus14')}
              id="plus14"
              d="M10.593,4.815H8.667V8.667H4.815v1.926H8.667v3.852h1.926V10.593h3.852V8.667H10.593ZM9.63,0a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,9.63,0Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,9.63,17.334Z"
              transform="translate(1443.175 1046.542)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus13')}
              id="plus13"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1312.982 1251.558)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus12')}
              id="plus12"
              d="M10.593,4.815H8.667V8.667H4.815v1.926H8.667v3.852h1.926V10.593h3.852V8.667H10.593ZM9.63,0a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,9.63,0Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,9.63,17.334Z"
              transform="translate(1326.428 1033.268)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus11')}
              id="plus11"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1429.729 1238.283)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus10')}
              id="plus10"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1360.206 1129.139)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus9')}
              id="plus9"
              d="M10.593,4.815H8.667V8.667H4.815v1.926H8.667v3.852h1.926V10.593h3.852V8.667H10.593ZM9.63,0a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,9.63,0Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,9.63,17.334Z"
              transform="translate(1382.014 1080.503)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus8')}
              id="plus8"
              d="M10.593,4.815H8.667V8.667H4.815v1.926H8.667v3.852h1.926V10.593h3.852V8.667H10.593ZM9.63,0a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,9.63,0Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,9.63,17.334Z"
              transform="translate(1247.828 1049.53)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus7')}
              id="plus7"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1508.447 1254.545)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus6')}
              id="plus6"
              d="M10.593,4.815H8.667V8.667H4.815v1.926H8.667v3.852h1.926V10.593h3.852V8.667H10.593ZM9.63,0a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,9.63,0Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,9.63,17.334Z"
              transform="translate(1508.447 1049.53)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus5')}
              id="plus5"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1247.828 1254.545)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus4')}
              id="plus4"
              d="M10.593,4.815H8.667V8.667H4.815v1.926H8.667v3.852h1.926V10.593h3.852V8.667H10.593ZM9.63,0a9.63,9.63,0,1,0,9.63,9.63A9.634,9.634,0,0,0,9.63,0Zm0,17.334a7.7,7.7,0,1,1,7.7-7.7A7.714,7.714,0,0,1,9.63,17.334Z"
              transform="translate(1242.887 950.634)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus3')}
              id="plus3"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1512.503 1154.763)"
              fill="#fff"
            />
            <path
              style={isEdited ? { cursor: 'pointer' } : null}
              onClick={() => showModal('plus2')}
              id="plus2"
              d="M10.593,14.445H8.667V10.593H4.815V8.667H8.667V4.815h1.926V8.667h3.852v1.926H10.593ZM9.63,19.26a9.63,9.63,0,1,1,9.63-9.63A9.634,9.634,0,0,1,9.63,19.26Zm0-17.334a7.7,7.7,0,1,0,7.7,7.7A7.714,7.714,0,0,0,9.63,1.926Z"
              transform="translate(1378.078 1320.917)"
              fill="#fff"
            />
          </g>
        </svg>
      </ColumnWrapper>
      <ButtonWrapper>
        {isEdited ? (
          <Button onClick={handleRedirect}>Confirm line-up</Button>
        ) : (
          <ButtonEdit onClick={() => setIsEdited(true)} />
        )}
      </ButtonWrapper>
    </LineUpWrapper>
  );
};

LineUp.propTypes = {};

export default LineUp;
