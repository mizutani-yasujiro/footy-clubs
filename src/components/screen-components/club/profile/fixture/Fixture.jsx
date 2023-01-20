import React, { useState } from 'react';
import styled from 'styled-components';
import { MAIN_THEME_COLOR } from '../../../../../constants/themeColors';
import fixutresMock from '../../../../../mocks/fixturesMock';
import usersMock from '../../../../../mocks/usersMock';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import Counter from '../../../../common-components/counter/Counter';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import LineUp from './line-up/LineUp';
import MatchFixtures from './match-fixtures/MatchFixtures';
import TeamStatus from './team-status/TeamStatus';
import TeamStatusEdit from './team-status/TeamStatusEdit';

const Wrapper = styled(BorderContainer)`
  @media (max-width: 1056px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CenterColumn = styled(ColumnWrapper)`
  margin: 0 50px;
`;

const Space = styled.div`
  margin: 20px 0 30px;
  @media (max-width: 1056px) {
    display: flex;
    justify-content: center;
  }
`;

const Fixture = () => {
  const [isStatusEdited, setIsStatusEdited] = useState(false);
  return (
    <Wrapper>
      <ColumnWrapper>
        <Text24>Next Game In</Text24>
        <Space>
          <Counter />
          <Text14 style={{ marginTop: 40, color: MAIN_THEME_COLOR }}>Next game</Text14>
          <Text24>
            <strong>07/04/2020</strong> 22.00-23.00 <strong>Tuesday</strong>
          </Text24>
        </Space>
        <Space>
          <MatchFixtures data={fixutresMock} />
        </Space>
      </ColumnWrapper>
      <CenterColumn>
        <Text24 style={{ alignSelf: 'center' }}>Team Status</Text24>
        <Space>
          {isStatusEdited ? (
            <TeamStatusEdit onSubmit={() => setIsStatusEdited(false)} />
          ) : (
            <TeamStatus onSubmit={() => setIsStatusEdited(true)} data={usersMock} />
          )}
        </Space>
      </CenterColumn>
      <ColumnWrapper>
        <Text24 style={{ alignSelf: 'center' }}>Line Up</Text24>
        <Space>
          <LineUp />
        </Space>
      </ColumnWrapper>
    </Wrapper>
  );
};

export default Fixture;
