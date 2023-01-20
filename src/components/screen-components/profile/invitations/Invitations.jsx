import React, { useState } from 'react';
import styled from 'styled-components';
import checkIcon from '../../../../assets/icons/check.svg';
import {
  ACCENT_THEME_COLOR,
  APP_BACKGROUND_COLOR,
  GREY_TEXT_COLOR,
} from '../../../../constants/themeColors';
import clubInvitationMock from '../../../../mocks/clubInvitationMock';
import Button from '../../../common-components/buttons/button/Button';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import Counter from '../../../common-components/counter/Counter';
import Text14 from '../../../common-components/text/text-14/Text14';
import Text16 from '../../../common-components/text/text-16/Text16';
import Text24 from '../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import { Avatar } from '../../club/profile/results/sharedStyledComponents';

const List = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  width: 100%;
  list-style: none;
  padding: 16px;
  align-items: center;
  border: 1px solid transparent;
  background-color: ${(props) => (props.isEven ? APP_BACKGROUND_COLOR : '#FFFFFF')};
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  &:hover {
    border-color: ${ACCENT_THEME_COLOR};
    transform: scale(0.99);
  }
`;

const DetailsWrapper = styled(BorderContainer)`
  max-width: 400px;
  padding: 25px;
  margin-left: 25px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const CrossBtn = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  position: relative;
  cursor: pointer;
  margin-right: 6px;
  &:after,
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 2px;
    height: 16px;
    border-radius: 2px;
    background: ${GREY_TEXT_COLOR};
    transition: 0.2s ease-in-out all;
  }
  &:hover:after,
  &:hover:before {
    background: red;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const Check = styled.img`
  cursor: pointer;
  transition: 0.2s ease-in-out opacity;
  &:hover {
    opacity: 0.5;
  }
`;

const ClubCard = styled(ColumnWrapper)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 4px;
  margin: 20px 0;
`;

const Invitations = (props) => {
  const [selectedUser, setSelectedUser] = useState(clubInvitationMock[0]);

  return (
    <RowWrapper>
      <BorderContainer style={{ maxWidth: 800 }}>
        <ColumnWrapper>
          <Text14 bold>Joining requests</Text14>
          <List>
            {clubInvitationMock.map((e, i) => (
              <ListItem
                style={selectedUser?.id === e.id ? { borderColor: ACCENT_THEME_COLOR } : null}
                onClick={() => setSelectedUser(e)}
                key={e.id}
                isEven={i % 2 === 0}>
                <Avatar style={{ width: 45, height: 45 }} src={e.img} alt={e.name} />
                <ColumnWrapper>
                  <Text16 bold>{e.name}</Text16>
                  <Text14>{e?.details?.clubMembers || 0} members</Text14>
                </ColumnWrapper>
                <RowWrapper autoWidth>
                  <CrossBtn />
                  <Check src={checkIcon} alt="check" />
                </RowWrapper>
              </ListItem>
            ))}
          </List>
        </ColumnWrapper>
      </BorderContainer>
      <DetailsWrapper>
        <ColumnWrapper>
          <Text24>Club</Text24>
          <ClubCard>
            <Avatar
              style={{
                alignSelf: 'center',
                marginBottom: 20,
                width: 80,
                height: 80,
                marginRight: 0,
              }}
              src={selectedUser?.img}
              alt="avatar"
            />
            <Text24>{selectedUser?.name}</Text24>
            <Text14>Owner</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {selectedUser?.details?.clubOwner || '-'}
            </Text14>
            <Text14>Location</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {selectedUser?.details?.clubLocation || '-'}
            </Text14>
            <Text14>Members</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {selectedUser?.details?.clubMembers || '-'}
            </Text14>
            <Text14>Gamze size</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {selectedUser?.details?.gameSize || '-'}
            </Text14>
            <Text14>Game day</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {selectedUser?.details?.gameDay || '-'}
            </Text14>
            <Text24 style={{ margin: '20px 0 10px' }}>Next Game In</Text24>
            <Counter small />
          </ClubCard>
          <Button style={{ alignSelf: 'flex-end' }}>Check Club</Button>
        </ColumnWrapper>
      </DetailsWrapper>
    </RowWrapper>
  );
};

Invitations.propTypes = {};

export default Invitations;
