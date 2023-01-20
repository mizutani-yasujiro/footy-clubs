import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userplus from '../../../../../assets/icons/userplus.svg';
import chatUserMock from '../../../../../mocks/chatUserMock';
import { setChatAction } from '../../../../../redux/actions/chat';
import ButtonTextIcon from '../../../../common-components/buttons/button-text-icon/ButtonTextIcon';
import Button from '../../../../common-components/buttons/button/Button';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import BannerContainer from '../../../shared/banner/BannerContainer';
import ProfileImage from '../../../shared/banner/ProfileImage';
import ClubChatPopup from './ClubChatPopup';
import Information from './information/Information';
import Statistics from './statistics/Statistics';
const Banner = () => {
  const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();

  const handleMessageClick = () => {
    //only for dev purpose
    dispatch(setChatAction({ user: chatUserMock[1] }));
    setIsHidden(false);
  };
  return (
    <>
      <RowWrapper style={{ alignItems: 'center', marginBottom: 10 }}>
        <Button onClick={handleMessageClick} small style={{ marginRight: 20 }}>
          Message
        </Button>
        {isHidden ? null : <ClubChatPopup closePopup={() => setIsHidden(true)} />}
        <ButtonTextIcon
          onClick={() => {}}
          style={{ alignItems: 'center' }}
          title="Join the club"
          icon={userplus}
          textColor="#000"
        />
      </RowWrapper>
      <BannerContainer>
        <ProfileImage
          src="https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
          alt="club-image"
        />
        <Information />
        <Statistics />
      </BannerContainer>
    </>
  );
};

export default Banner;
