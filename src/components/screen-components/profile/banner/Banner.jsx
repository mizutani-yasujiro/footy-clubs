import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MAIN_THEME_COLOR } from '../../../../constants/themeColors';
import chatUserMock from '../../../../mocks/chatUserMock';
import { setChatAction } from '../../../../redux/actions/chat';
import Button from '../../../common-components/buttons/button/Button';
import Text14 from '../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import BannerContainer from '../../shared/banner/BannerContainer';
import ProfileImage from '../../shared/banner/ProfileImage';
import ProfileInformation from './profile-information/ProfileInformation';
import ProfileStatistics from './profile-statistics/ProfileStatistics';
import UserChatPopup from './profile-statistics/UserChatPopup';

import {connect} from 'react-redux';
import { userActions } from '../../../../redux/actions';
import { positionStringMock } from '../edit-form/mocks';

import DefaultAvatar from '../../../../assets/avatar/default_avatar.png';

const ImageWrapper = styled(ColumnWrapper)`
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  @media (max-width: 1054px) {
    margin: 0;
  }
`;

const Banner = (props) => {
  const {isMyProfile} = props;

  useEffect(() => {
    props.fetchUser();
  }, []);

  const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();

  const handleMessageClick = () => {
    //only for dev purpose
    dispatch(setChatAction({ user: chatUserMock[0] }));
    setIsHidden(false);
  };

  let position_obj = props.profile == undefined ? null : positionStringMock.find((i) => i.key == props.profile.position)
  let position = (position_obj == null ? 'N/A' : position_obj.value)

  let avatar = props.profile == undefined || props.profile.avatar == undefined || props.profile.avatar == '' ? null : props.profile.avatar

  return (
    <>
      {!isMyProfile ? (
        <RowWrapper style={{ alignItems: 'center', marginBottom: 10 }}>
          <Button onClick={handleMessageClick} small style={{ marginRight: 20 }}>
            Message
          </Button>
        </RowWrapper>
      ) : null}
      {isHidden ? null : <UserChatPopup closePopup={() => setIsHidden(true)} />}
      <BannerContainer>
        <ImageWrapper autoWidth>
          <ProfileImage
            style={{ margin: 0 }}
            src={avatar === null ? DefaultAvatar : avatar}
            alt="profile-image"
          />
          <Text14 style={{ color: MAIN_THEME_COLOR, marginTop: 10 }}>{position}</Text14>
        </ImageWrapper>
        <ProfileInformation isMyProfile={isMyProfile} />
        <ProfileStatistics isMyProfile={isMyProfile} />
      </BannerContainer>
    </>
  );
};


function mapDispatchToProps(dispatch){
  return {
    fetchUser:() => dispatch(userActions.fetchUser())
  };
}

function mapStateToProps(state){
  const {info, profile} = state.user
  return {
    info, profile
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
