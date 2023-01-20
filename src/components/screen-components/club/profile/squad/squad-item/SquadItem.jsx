import React from 'react';
import styled from 'styled-components';
import emptyStar from '../../../../../../assets/icons/star-empty.svg';
import fillStar from '../../../../../../assets/icons/star-fill.svg';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import {
  APP_BACKGROUND_COLOR,
  MAIN_THEME_COLOR,
  BORDER_COLOR,
} from '../../../../../../constants/themeColors';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import flagIcon from '../../../../../../assets/icons/england.svg';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import Text12 from '../../../../../common-components/text/text-12/Text12';
import Avatar from '../../../../shared/Avatar';
import { Star } from '../../results/sharedStyledComponents';
import ButtonText from '../../../../../common-components/buttons/button-text/ButtonText';
import Number from '../../../../shared/Number';

const Wrapper = styled(ColumnWrapper)`
  align-items: center;
  width: 260px;
  border-radius: 2px;
  border: 1px solid ${BORDER_COLOR};
  margin: 10px 10px 12px 0;
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

const SquadItem = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <NumberSquare>
            <Text16 bold style={{ color: 'white' }}>
              3
            </Text16>
          </NumberSquare>
          <ColumnWrapper>
            <RowWrapper style={{ alignItems: 'center' }}>
              <Avatar
                src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="avatar"
              />
              <ColumnWrapper autoWidth>
                <Text14 bold>Mark J Whittaker</Text14>
                <Text12>Defender</Text12>
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
            <img width="24" src={flagIcon} alt="nationality" />
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
          <ItemWrapper>
            <Text14>Assists</Text14>
            <Text14>0</Text14>
          </ItemWrapper>
          <ButtonText style={{ alignSelf: 'flex-end', marginRight: 10 }}>See details</ButtonText>
        </ColumnWrapper>
      </Wrapper>
    </>
  );
};

export default SquadItem;
