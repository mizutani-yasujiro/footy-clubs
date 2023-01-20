import PropTypes from 'prop-types';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ButtonEdit from '../../../../../common-components/buttons/button-edit/ButtonEdit';
// import ButtonEdit from '../../../../../common-components/buttons/button-edit/ButtonEdit';
import Tabs from '../../../../../common-components/tabs/Tabs';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { Header, Table, TeamText } from '../sharedStyledComponents';
import LineUpStats from './stats/LineUpStats';
import SummaryHighligts from './summary/SummaryHighligts';

const TabsWrapper = styled(ColumnWrapper)`
  padding: 0 25px;
`;

const DetailsTable = ({ matchInfo, onEdit }) => {
  const location = useLocation();
  const tabs = [
    {
      title: 'Summary & Highlights',
      children: <SummaryHighligts />,
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
      <ButtonEdit onClick={onEdit} />
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
  onEdit: PropTypes.func.isRequired,
};

export default DetailsTable;
