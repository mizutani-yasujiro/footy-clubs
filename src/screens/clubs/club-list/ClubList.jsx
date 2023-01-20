import React from 'react';
import AppWrapper from '../../../components/common-components/wrappers/app-wrapper/AppWrapper';
import Menu from '../../../components/common-components/menu/Menu';
import Clubs from '../../../components/screen-components/club/list/clubs/Clubs';
import JoinClub from '../../../components/screen-components/club/list/join-club/JoinClub';
import RowWrapper from '../../../components/common-components/wrappers/row-wrapper/RowWrapper';
import styled from 'styled-components';

const ClubListWrapper = styled(RowWrapper)`
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const ClubList = () => {
  return (
    <>
      <AppWrapper>
        <Menu />
        <ClubListWrapper>
          <Clubs />
          <JoinClub />
        </ClubListWrapper>
      </AppWrapper>
    </>
  );
};

export default ClubList;
