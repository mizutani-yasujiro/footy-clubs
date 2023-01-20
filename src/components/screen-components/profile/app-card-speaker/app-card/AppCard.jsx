import React from 'react';
import styled from 'styled-components';
import starFillIcon from '../../../../../assets/icons/star-fill.svg';
import starEmptyIcon from '../../../../../assets/icons/star-empty.svg';
import englandIcon from '../../../../../assets/icons/england.svg';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text16 from '../../../../common-components/text/text-16/Text16';
import infoList from './mock';
import { CONTAINER_BACKGROUND_COLOR, MAIN_THEME_COLOR } from '../../../../../constants/themeColors';
import Text18 from '../../../../common-components/text/text-18/Text18';
import Text14 from '../../../../common-components/text/text-14/Text14';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';

const lastIndex = infoList.length - 1;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${CONTAINER_BACKGROUND_COLOR};
  border-radius: 23px;
  position: relative;
  max-width: 360px;
`;

const Nationality = styled.img`
  position: absolute;
  width: 40px;
  top: 15px;
  left: 15px;
`;

const NumberBox = styled.div`
  border-radius: 3px;
  padding: 4px;
  border: 2px solid ${MAIN_THEME_COLOR};
  font-size: 18px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  margin-right: 10px;
`;

const Layer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CardImage = styled.img`
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
  width: 360px;
  height: 400px;
  object-fit: cover;
  @media (max-width: 1054px) {
    width: 100%;
    height: auto;
  }
`;

const InfoWrapper = styled(ColumnWrapper)`
  padding: 5px 14px;
  margin-bottom: 10px;
  width: auto;
`;

const InfoWrapperContainer = styled(ColumnWrapper)`
  width: auto;
  padding-left: 25px;
  @media (max-width: 1054px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
  }
`;

const AppCardWrapper = styled(RowWrapper)`
  padding: 25px 50px 0;
  @media (max-width: 1054px) {
    flex-direction: column;
    padding: 5px;
  }
`;

const CardWrapper = styled(ColumnWrapper)`
  margin-bottom: -150px;
  @media (max-width: 1054px) {
    margin-bottom: 50px;
  }
`;

const AppCard = () => (
  <AppCardWrapper>
    <CardWrapper>
      <Card>
        <ColumnWrapper style={{ position: 'relative' }}>
          <CardImage
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
            alt="person"
          />
          <Layer />
        </ColumnWrapper>
        <Nationality src={englandIcon} alt="nationality" />
        <ColumnWrapper style={{ padding: '30px' }}>
          <RowWrapper
            style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <RowWrapper style={{ width: 'auto', alignItems: 'center' }}>
              <NumberBox>23</NumberBox>
              <Text18>Whittaker</Text18>
            </RowWrapper>
            <RowWrapper style={{ width: 'auto' }}>
              <img src={starFillIcon} alt="star-fill" />
              <img src={starFillIcon} alt="star-fill" />
              <img src={starFillIcon} alt="star-fill" />
              <img src={starFillIcon} alt="star-fill" />
              <img src={starEmptyIcon} alt="star-empty" />
            </RowWrapper>
          </RowWrapper>
          <Text14>
            But I Must Explain To You How All This Mistaken Idea Of Denouncing Pleasure And Praising
            Pain Was Born And I Will Give You A Complete Account Of The System, And Expound The
            Actual
          </Text14>
        </ColumnWrapper>
      </Card>
    </CardWrapper>
    <InfoWrapperContainer>
      {infoList
        ? infoList.map((item, index) => (
            <InfoWrapper
              style={{ background: index === 0 ? MAIN_THEME_COLOR : 'transparent' }}
              key={item.cat}>
              <Text14 style={index === 0 ? { color: '#FFFFFF' } : null}>{item.cat}</Text14>
              <Text16
                style={{
                  color: index === 0 ? '#FFFFFF' : MAIN_THEME_COLOR,
                  cursor: index === lastIndex ? 'pointer' : 'auto',
                }}
                bold>
                {item.value}
              </Text16>
            </InfoWrapper>
          ))
        : null}
    </InfoWrapperContainer>
  </AppCardWrapper>
);

export default AppCard;
