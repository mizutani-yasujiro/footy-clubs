import React from 'react';
import styled from 'styled-components';
import playerMock from '../../../../../mocks/playerMock';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import Text24 from '../../../../common-components/text/text-24/Text24';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import StatsItem from './stats-item/StatsItem';

const Container = styled(RowWrapper)`
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
`;

const Wrapper = styled(BorderContainer)`
  flex-direction: column;
`;

const Stats = () => {
  return (
    <Wrapper>
      <Text24>Stats</Text24>
      <Container>
        <StatsItem players={playerMock} header="Goals" />
        <StatsItem players={playerMock} header="Assists" />
        <StatsItem players={playerMock} header="Man of the match" />
        <StatsItem players={playerMock} header="Best Goal Award" />
        <StatsItem players={playerMock} header="Best Defender Award" />
        <StatsItem players={playerMock} header="Worse player Award" />
        <StatsItem players={playerMock} header="Most Wins" />
        <StatsItem players={playerMock} header="Most Loses" />
        <StatsItem players={playerMock} header="Late player award" />
      </Container>
    </Wrapper>
  );
};

export default Stats;
