import React, { useState } from 'react';
import styled from 'styled-components';
import bin from '../../../../../assets/icons/bin.svg';
import hospital from '../../../../../assets/icons/hospital.svg';
import pen from '../../../../../assets/icons/pencil.svg';
import { APP_BACKGROUND_COLOR, MAIN_THEME_COLOR } from '../../../../../constants/themeColors';
import injuriesMock from '../../../../../mocks/injuriesMock';
import ButtonTextIcon from '../../../../common-components/buttons/button-text-icon/ButtonTextIcon';
import Button from '../../../../common-components/buttons/button/Button';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import Text14 from '../../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Muscle from './Muscle';
import Popup from './Popup';

const Col = styled(BorderContainer)`
  flex-direction: column;
  margin: ${(props) => (props.right ? '0 25px 0 0' : '0 0 0 25px')};
  @media (max-width: 1118px) {
    margin: 0 0 50px;
  }
`;

const Wrapper = styled(ColumnWrapper)`
  min-width: 555px;
  @media (max-width: 768px) {
    min-width: auto;
  }
`;

const InjuriesContainer = styled(RowWrapper)`
  justify-content: space-between;
  @media (max-width: 1118px) {
    flex-wrap: wrap;
  }
`;

const Injuries = ({ isMyProfile }) => {
  const [hidden, sethidden] = useState(true);
  const [injuries] = useState(injuriesMock);
  return (
    <InjuriesContainer>
      <Col right>
        <ColumnWrapper style={{ maxHeight: 500, overflowY: 'auto' }}>
          {injuries?.map((e, i) => (
            <ColumnWrapper
              style={{
                padding: '8px 16px',
                backgroundColor: i % 2 === 0 ? '#FFF' : APP_BACKGROUND_COLOR,
              }}
              key={i}>
              {isMyProfile ? (
                <RowWrapper style={{ justifyContent: 'flex-end' }}>
                  <div style={{ marginRight: 10 }}>
                    <ButtonTextIcon
                      title="Delete"
                      icon={bin}
                      onClick={() => {}}
                      textColor="#BF1D1D"
                    />
                  </div>
                  <div>
                    <ButtonTextIcon
                      title="Edit"
                      icon={pen}
                      onClick={() => sethidden(false)}
                      textColor={MAIN_THEME_COLOR}
                    />
                  </div>
                </RowWrapper>
              ) : null}

              <ColumnWrapper>
                <Text14>
                  <strong>Injury: </strong>
                  {e?.injury}
                </Text14>
                <Text14>
                  <strong>Injury Date: </strong>
                  {e?.date}
                </Text14>
                <Text14>
                  <strong>Notes: </strong>
                  {e?.note}
                </Text14>
                <RowWrapper style={{ justifyContent: 'flex-end' }}>
                  {e?.status?.toLowerCase() !== 'recovered' ? (
                    <img style={{ marginRight: 5 }} src={hospital} alt="current-injury" />
                  ) : null}
                  <Text14
                    bold
                    style={{
                      textTransform: 'capitalize',
                      color:
                        e?.status?.toLowerCase() === 'recovered' ? MAIN_THEME_COLOR : '#FF6060',
                    }}>
                    {e?.status}
                  </Text14>
                </RowWrapper>
              </ColumnWrapper>
            </ColumnWrapper>
          ))}
        </ColumnWrapper>
        {isMyProfile ? (
          <Button onClick={() => sethidden(false)} style={{ alignSelf: 'flex-end', marginTop: 30 }}>
            New Injury
          </Button>
        ) : null}
      </Col>
      <Col>
        <Wrapper>
          <Muscle />
          {/* <Information>
            <RowWrapper style={{ alignItems: 'center', height: 22 }}>
              <RowWrapper>
                <Text14 style={{ marginRight: 5 }} bold>
                  Injury:
                </Text14>
                <Text14>Calf Muscle</Text14>
              </RowWrapper>
              <ButtonEdit onClick={() => sethidden(false)} />
            </RowWrapper>
            <RowWrapper>
              <Text14 style={{ marginRight: 5 }} bold>
                Injury Date:
              </Text14>
              <Text14>20/5/20</Text14>
            </RowWrapper>
            <RowWrapper>
              <Text14 style={{ marginRight: 5 }} bold>
                Notes:
              </Text14>
              <Text14>Looks like I{"'"}ll be out for 6 weeks</Text14>
            </RowWrapper>
          </Information> */}
          {hidden ? null : <Popup closePopup={() => sethidden(true)} />}
        </Wrapper>
      </Col>
    </InjuriesContainer>
  );
};

Injuries.propTypes = {};

export default Injuries;
