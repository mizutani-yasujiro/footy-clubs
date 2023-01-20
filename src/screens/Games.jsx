import React, { useState } from 'react';
import styled from 'styled-components';
import BorderContainer from '../components/common-components/containers/border-container/BorderContainer';
import GamesList from '../components/screen-components/games/list/GamesList';
import GameMap from '../components/screen-components/games/map/GameMap';
import Menu from '../components/common-components/menu/Menu';
import AppWrapper from '../components/common-components/wrappers/app-wrapper/AppWrapper';

const GamesWrapper = styled(BorderContainer)`
  @media (max-width: 940px) {
    flex-wrap: wrap;
  }
`;

const Games = () => {
  const [gameLocation, setGameLocation] = useState('');
  return (
    <AppWrapper>
      <Menu />
      <GamesWrapper>
        <GamesList onSelect={(location) => setGameLocation(location)} />
        <GameMap location={gameLocation} />
      </GamesWrapper>
    </AppWrapper>
  );
};

export default Games;
