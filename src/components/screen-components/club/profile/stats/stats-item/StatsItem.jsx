import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../../../constants/themeColors';
import ButtonText from '../../../../../common-components/buttons/button-text/ButtonText';
import Text12 from '../../../../../common-components/text/text-12/Text12';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Avatar from '../../../../shared/Avatar';
import Number from '../../../../shared/Number';
import StatsPopup from '../StatsPopup';
import PlayerItem from './PlayerItem';

const ItemContainer = styled(ColumnWrapper)`
  align-items: center;
  width: 260px;
  margin: 30px 25px 12px;
  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Wrapper = styled(ColumnWrapper)`
  align-items: center;
  border-radius: 2px;
  margin-top: 10px;
  border: 1px solid ${BORDER_COLOR};
`;

const Header = styled(RowWrapper)`
  align-items: center;
  padding: 10px;
  position: relative;
  background: ${APP_BACKGROUND_COLOR};
`;

const StatsItem = ({ players, header }) => {
  const [hidden, sethidden] = useState(true);
  return (
    <ItemContainer>
      <Text16 style={{ alignSelf: 'flex-start' }}>{header}</Text16>
      <Wrapper>
        <Header>
          <ColumnWrapper>
            <RowWrapper style={{ alignItems: 'center' }}>
              <Text24 style={{ fontSize: 28, fontWeight: 900, marginRight: 10 }}>1</Text24>
              <Avatar src={players[0].img} alt="avatar" />
              <ColumnWrapper>
                <Text14 bold>{players[0].name}</Text14>
                <RowWrapper>
                  <Text12>{players[0].position}</Text12>
                  <Number style={{ margin: '0 5px 0 10px' }}>
                    <Text16 bold style={{ color: 'white' }}>
                      {players[0].number}
                    </Text16>
                  </Number>
                  <img width="24" src={players[0].natFlag} alt="nationality" />
                </RowWrapper>
              </ColumnWrapper>
            </RowWrapper>
          </ColumnWrapper>
        </Header>
        <ColumnWrapper>
          {players.slice(1, 5).map((p, i) => (
            <PlayerItem key={i} player={p} number={i + 2} />
          ))}
          <ButtonText
            onClick={() => sethidden(false)}
            style={{ alignSelf: 'flex-end', paddingRight: 10 }}>
            See full list
          </ButtonText>
        </ColumnWrapper>
      </Wrapper>
      {hidden ? null : (
        <StatsPopup
          title={header}
          items={players.map((it, i) => ({ ...it, n: i + 1 }))}
          closePopup={() => sethidden(true)}
        />
      )}
    </ItemContainer>
  );
};

StatsItem.propTypes = {
  players: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  header: PropTypes.string.isRequired,
};

export default StatsItem;
