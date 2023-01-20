import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Avatar from '../../../../shared/Avatar';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import Number from '../../../../shared/Number';

const ItemWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const PlayerItem = ({ player, number }) => {
  return (
    <>
      <ItemWrapper>
        <Text14 bold>{number}</Text14>
        <Avatar src={player.img} alt="avatar" small />
        <Text14 style={{ width: 100 }}>{player.name}</Text14>
        <RowWrapper autoWidth>
          <Number>
            <Text16 bold style={{ color: 'white' }}>
              {player.number}
            </Text16>
          </Number>
          <img width="24" src={player.natFlag} style={{ marginLeft: 5 }} alt="nationality" />
        </RowWrapper>
      </ItemWrapper>
    </>
  );
};

PlayerItem.propTypes = {
  player: PropTypes.objectOf(PropTypes.string).isRequired,
  number: PropTypes.string.isRequired,
};

export default PlayerItem;
