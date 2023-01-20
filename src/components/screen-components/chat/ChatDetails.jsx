import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../common-components/buttons/button/Button';
import Counter from '../../common-components/counter/Counter';
import Text14 from '../../common-components/text/text-14/Text14';
import Text24 from '../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../common-components/wrappers/column-wrapper/ColumnWrapper';
import NewAppCard from '../profile/app-card-speaker/new-app-card/NewAppCard';
import Avatar from '../shared/Avatar';

const ClubCard = styled(ColumnWrapper)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 4px;
  margin: 20px 0;
`;

const ChatDetails = () => {
  const user = useSelector((s) => s?.chat?.user);
  return (
    <ColumnWrapper>
      {!user?.isClub ? (
        <>
          <Text24 style={{ marginBottom: 20 }}>Player</Text24>
          <NewAppCard maxWidth="unset" user={user} />
          <Button style={{ alignSelf: 'flex-end', marginTop: 20 }}>Check Profile</Button>
        </>
      ) : (
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
              src={user?.img}
              alt="avatar"
            />
            <Text24>{user?.name}</Text24>
            <Text14>Owner</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {user?.details?.clubOwner || '-'}
            </Text14>
            <Text14>Location</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {user?.details?.clubLocation || '-'}
            </Text14>
            <Text14>Members</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {user?.details?.clubMembers || '-'}
            </Text14>
            <Text14>Gamze size</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {user?.details?.gameSize || '-'}
            </Text14>
            <Text14>Game day</Text14>
            <Text14 bold style={{ marginBottom: 10 }}>
              {user?.details?.gameDay || '-'}
            </Text14>
            <Text24 style={{ margin: '20px 0 10px' }}>Next Game In</Text24>
            <Counter small />
          </ClubCard>
          <Button style={{ alignSelf: 'flex-end' }}>Check Club</Button>
        </ColumnWrapper>
      )}
    </ColumnWrapper>
  );
};

ChatDetails.propTypes = {};

export default ChatDetails;
