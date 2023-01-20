import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from '../../../common-components/tabs/Tabs';
import Text24 from '../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import LineUpStats from '../../club/profile/results/details-table/stats/LineUpStats';
import SummaryHighligts from '../../club/profile/results/details-table/summary/SummaryHighligts';
import { Header, Table, TeamText } from '../../club/profile/results/sharedStyledComponents';
// import ButtonEdit from '../../../common-components/buttons/button-edit/ButtonEdit';

const TabsWrapper = styled(ColumnWrapper)`
  padding: 0 25px;
`;

const DetailsTable = ({ matchInfo, isMyProfile }) => {
  const location = useLocation();
  const tabs = [
    {
      title: 'Summary & Highlights',
      children: <SummaryHighligts isMyProfile={isMyProfile} />,
      deactived: location.state ? location.state.renderStats : false,
    },
    {
      title: 'Line-up & Stats',
      children: <LineUpStats matchInfo={matchInfo} />,
      id: 'lineUpClubStats',
    },
  ];
  return (
    <>
      <Table autoWidth>
        <Header>
          <TeamText bold>{matchInfo.teamA.name}</TeamText>
          <Text24 style={{ fontSize: '2rem', fontWeight: '900' }}>VS</Text24>
          <TeamText bold>{matchInfo.teamB.name}</TeamText>
        </Header>
        <TabsWrapper>
          <Tabs bordered={false} tabs={tabs} />
        </TabsWrapper>
      </Table>
    </>
  );
};

DetailsTable.propTypes = {
  matchInfo: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.objectOf(PropTypes.string),
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    ]),
  ).isRequired,
};

export default DetailsTable;
