import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../../../../constants/themeColors';
import { setVotingAction } from '../../../../../../../redux/actions/voting';
import Button from '../../../../../../common-components/buttons/button/Button';
import Text14 from '../../../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../../../common-components/text/text-16/Text16';
import ColumnWrapper from '../../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Avatar from '../../../../../shared/Avatar';

const Table = styled(ColumnWrapper)`
  border: 1px solid ${BORDER_COLOR};
  align-items: center;
  max-height: 200px;
  margin-top: 50px;
`;

const ContentColumn = styled(ColumnWrapper)`
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100%;
`;

const Header = styled(RowWrapper)`
  background: ${APP_BACKGROUND_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};
  justify-content: space-between;
  padding: 16px 10px;
  align-items: center;
`;

const AvCol = styled(ColumnWrapper)`
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const GameFinish = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleRedirect = async () => {
    dispatch(setVotingAction({ isVoting: true }));
    await push({
      pathname: '/clubs/kchiegz0/profile',
      state: {
        renderStats: false,
      },
    });
    document.getElementById('clubResults').click();
    document.getElementById('lineUpClubStats').click();
  };

  return (
    <Table>
      <Header>
        <Text14>Captions</Text14>
        <RowWrapper autoWidth>
          <AvCol autoWidth>
            <Avatar
              style={{ margin: 0 }}
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
              small
              alt="cap"
            />
            <Text14>Diego Vertez</Text14>
          </AvCol>
          <AvCol autoWidth>
            <Avatar
              style={{ margin: 0 }}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              small
              alt="cap"
            />
            <Text14>Leo Chavi</Text14>
          </AvCol>
        </RowWrapper>
      </Header>
      <ContentColumn>
        <Text16 style={{ marginBottom: 6 }}>Game finished?</Text16>
        <Button onClick={handleRedirect}>Click here to input results</Button>
      </ContentColumn>
    </Table>
  );
};

GameFinish.propTypes = {};

export default GameFinish;
