import React from 'react';
import styled from 'styled-components';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import SimpleTabs from '../../../common-components/tabs/SimpleTabs';
import Injuries from './injuries/Injuries';
import NewAppCard from './new-app-card/NewAppCard';

const Wrapper = styled.div`
  display: flex;
  align-self: flex-start;
  @media (max-width: 1054px) {
    margin: 25px auto;
    align-self: center;
    width: 100%;
  }
`;

const tabs = [
  {
    title: 'app card',
    children: <NewAppCard />,
  },
  {
    title: 'Injuries',
    children: <Injuries />,
  },
];

const AppCardSpeaker = () => (
  <Wrapper>
    <BorderContainer style={{ position: 'relative' }}>
      <SimpleTabs tabs={tabs} />
    </BorderContainer>
  </Wrapper>
);

export default AppCardSpeaker;
