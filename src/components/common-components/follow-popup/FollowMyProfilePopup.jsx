import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR, MAIN_THEME_COLOR } from '../../../constants/themeColors';
import playerMock from '../../../mocks/playerMock';
import Cross from '../cross/Cross';
import Overlay from '../overlay/Overlay';
import Portal from '../portal/Portal';
import Text24 from '../text/text-24/Text24';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import Followers from './Followers';
import Following from './Following';

const Container = styled(ColumnWrapper)`
  max-width: 600px;
  min-height: 300px;
  background: #ffffff;
  padding: 50px;
`;

const HeaderLink = styled(Text24)`
  padding-bottom: 6px;
  border-bottom: 2px solid transparent;
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  border-bottom-color: ${(props) => (props.isSelected ? MAIN_THEME_COLOR : 'transparent')};
`;

const HeaderWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 10px;
  border-bottom: 2px solid ${APP_BACKGROUND_COLOR};
  margin-bottom: 30px;
`;

const usersFollow = playerMock.map((i) => ({
  ...i,
  userFollowMe: Math.random() >= 0.56,
  iFollowUser: Math.random() >= 0.53,
}));

const FollowMyProfilePopup = ({ closePopup, followersOnly }) => {
  const tabs = [
    {
      id: 1,
      title: 'Followers',
      children: <Followers users={usersFollow} />,
    },
    {
      id: 2,
      title: 'Following',
      children: <Following users={usersFollow} />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const popupRef = useRef();

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && ref.current === event.target) {
          closePopup();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(popupRef);

  return (
    <>
      <Portal>
        <Overlay ref={popupRef}>
          <Cross onClick={closePopup} />
          <Container>
            <HeaderWrapper>
              <HeaderLink
                isSelected={selectedTab?.id === 1}
                onClick={() => setSelectedTab(tabs[0])}>
                Followers
              </HeaderLink>
              {followersOnly ? null : (
                <HeaderLink
                  isSelected={selectedTab?.id === 2}
                  onClick={() => setSelectedTab(tabs[1])}>
                  Following
                </HeaderLink>
              )}
            </HeaderWrapper>
            {selectedTab?.children}
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

FollowMyProfilePopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default FollowMyProfilePopup;
