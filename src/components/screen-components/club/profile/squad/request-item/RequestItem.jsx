import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import emptyStar from '../../../../../../assets/icons/star-empty.svg';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import {
  APP_BACKGROUND_COLOR,
  MAIN_THEME_COLOR,
  GREY_TEXT_COLOR,
} from '../../../../../../constants/themeColors';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import flagIcon from '../../../../../../assets/icons/england.svg';
import checkIcon from '../../../../../../assets/icons/check.svg';
import Avatar from '../../../../shared/Avatar';
import { Star } from '../../results/sharedStyledComponents';
import Text12 from '../../../../../common-components/text/text-12/Text12';

const Wrapper = styled(RowWrapper)`
  align-items: center;
  padding: 10px 20px;
  background: ${APP_BACKGROUND_COLOR};
  border-radius: 2px;
  margin: 10px 0 12px;
`;

const CrossBtn = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  position: relative;
  cursor: pointer;
  margin-right: 6px;
  &:after,
  &:before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 2px;
    height: 16px;
    border-radius: 2px;
    background: ${GREY_TEXT_COLOR};
    transition: 0.2s ease-in-out all;
  }
  &:hover:after,
  &:hover:before {
    background: red;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const Check = styled.img`
  cursor: pointer;
  transition: 0.2s ease-in-out opacity;
  &:hover {
    opacity: 0.5;
  }
`;

const RequestItem = ({ img, name }) => {
  return (
    <>
      <Wrapper>
        <Avatar src={img} alt="avatar" />
        <ColumnWrapper autoWidth>
          <Text14>{name}</Text14>
          <Text12 style={{ color: MAIN_THEME_COLOR }}>Defender</Text12>
          <RowWrapper autoWidth style={{ alignItems: 'center' }}>
            <img width="20" style={{ marginRight: 6 }} src={flagIcon} alt="nationality" />
            <Text14 style={{ color: MAIN_THEME_COLOR }}>England</Text14>
          </RowWrapper>
        </ColumnWrapper>
        <RowWrapper style={{ margin: '0 10px' }}>
          <Star src={emptyStar} alt="rate" />
          <Star src={emptyStar} alt="rate" />
          <Star src={emptyStar} alt="rate" />
          <Star src={emptyStar} alt="rate" />
        </RowWrapper>
        <RowWrapper autoWidth>
          <CrossBtn />
          <Check src={checkIcon} alt="check" />
        </RowWrapper>
      </Wrapper>
    </>
  );
};

RequestItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RequestItem;
