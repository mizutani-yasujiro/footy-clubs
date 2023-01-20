import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import emptyStar from '../../../../../assets/icons/star-empty.svg';
import fillStar from '../../../../../assets/icons/star-fill.svg';
import {
  APP_BACKGROUND_COLOR,
  BORDER_COLOR,
  MAIN_THEME_COLOR,
} from '../../../../../constants/themeColors';
import Text12 from '../../../../common-components/text/text-12/Text12';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../common-components/text/text-16/Text16';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import { Star } from '../../../club/profile/results/sharedStyledComponents';
import Avatar from '../../../shared/Avatar';
import Number from '../../../shared/Number';

const Wrapper = styled(ColumnWrapper)`
  align-items: center;
  border-radius: 2px;
  border: 1px solid ${BORDER_COLOR};
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const Header = styled(RowWrapper)`
  align-items: center;
  padding: 10px;
  position: relative;
  background: ${APP_BACKGROUND_COLOR};
`;

const NumberSquare = styled(Number)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ItemWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
`;

const NewAppCard = ({ maxWidth, user }) => {
  return (
    <Wrapper style={{ maxWidth }}>
      <Header>
        <NumberSquare>
          <Text16 bold style={{ color: 'white' }}>
            {user?.number || 3}
          </Text16>
        </NumberSquare>
        <ColumnWrapper>
          <RowWrapper style={{ alignItems: 'center' }}>
            <Avatar src={user?.img} alt="avatar" />
            <ColumnWrapper autoWidth>
              <Text14 bold>{user?.name}</Text14>
              <Text12>{user?.position || 'Defender'}</Text12>
            </ColumnWrapper>
          </RowWrapper>
          <RowWrapper style={{ justifyContent: 'flex-end' }}>
            <Star src={fillStar} alt="star" />
            <Star src={fillStar} alt="star" />
            <Star src={fillStar} alt="star" />
            <Star src={emptyStar} alt="star" />
          </RowWrapper>
        </ColumnWrapper>
      </Header>
      <ColumnWrapper>
        <ItemWrapper>
          <Text14>Nationality</Text14>
          <img width="24" src={user?.natFlag} alt="nationality" />
        </ItemWrapper>
        <ItemWrapper>
          <Text14>Status</Text14>
          <Text14 bold style={{ color: MAIN_THEME_COLOR }}>
            fit
          </Text14>
        </ItemWrapper>
        <ItemWrapper>
          <Text14>Appearances</Text14>
          <Text14>0</Text14>
        </ItemWrapper>
        <ItemWrapper>
          <Text14>Goals</Text14>
          <Text14>0</Text14>
        </ItemWrapper>
        <ItemWrapper style={{ paddingBottom: 10 }}>
          <Text14>Assists</Text14>
          <Text14>0</Text14>
        </ItemWrapper>
      </ColumnWrapper>
    </Wrapper>
  );
};

NewAppCard.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

NewAppCard.defaultProps = {
  maxWidth: 260,
};

export default NewAppCard;
