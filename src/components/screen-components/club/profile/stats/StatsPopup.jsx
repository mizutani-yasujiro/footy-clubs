import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR } from '../../../../../constants/themeColors';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import Cross from '../../../../common-components/cross/Cross';
import Portal from '../../../../common-components/portal/Portal';
import Text12 from '../../../../common-components/text/text-12/Text12';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../common-components/text/text-16/Text16';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Avatar from '../../../shared/Avatar';
import Number from '../../../shared/Number';

const Overlay = styled(ColumnWrapper)`
  background: rgba(0, 0, 0, 0.39);
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const Container = styled(ColumnWrapper)`
  max-width: 600px;
  min-height: 300px;
  background: #ffffff;
  padding: 50px;
`;

const ItemWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${(props) => (props.dark ? APP_BACKGROUND_COLOR : '#FFFFFF')};
`;

const StatsPopup = ({ closePopup, items, title }) => {
  const popupRef = useRef();
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && ref.current === event.target) {
          closePopup();
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(popupRef);
  return (
    <>
      <Portal>
        <Overlay ref={popupRef}>
          <Cross onClick={closePopup} />
          <Container>
            <Text24 style={{ marginBottom: 30 }}>{title}</Text24>
            {items?.map((item, i) => (
              <ItemWrapper dark={i % 2 === 0} key={`${item.name}${item.number}${i}`}>
                {i === 0 ? (
                  <RowWrapper autoWidth style={{ alignItems: 'center' }}>
                    <Text24 style={{ fontSize: 28, fontWeight: 900, marginRight: 10 }}>1</Text24>
                    <Avatar src={item.img} alt="avatar" />
                    <ColumnWrapper>
                      <Text14 bold>{item.name}</Text14>
                      <RowWrapper>
                        <Text12>{item.position}</Text12>
                        <Number style={{ margin: '0 5px 0 10px' }}>
                          <Text16 bold style={{ color: 'white' }}>
                            {item.number}
                          </Text16>
                        </Number>
                        <img width="24" src={item.natFlag} alt="nationality" />
                      </RowWrapper>
                    </ColumnWrapper>
                  </RowWrapper>
                ) : (
                  <RowWrapper style={{ alignItems: 'center' }} autoWidth>
                    <Text14 bold style={{ marginRight: 10 }}>
                      {item.n}
                    </Text14>
                    <Avatar src={item.img} alt="avatar" small />
                    <Text14 style={{ width: 100 }}>{item.name}</Text14>
                    <RowWrapper autoWidth>
                      <Number>
                        <Text16 bold style={{ color: 'white' }}>
                          {item.number}
                        </Text16>
                      </Number>
                      <img
                        width="24"
                        src={item.natFlag}
                        style={{ marginLeft: 5 }}
                        alt="nationality"
                      />
                    </RowWrapper>
                  </RowWrapper>
                )}

                <RowWrapper autoWidth>
                  <ButtonText onClick={() => {}} style={{ alignSelf: 'flex-end' }}>
                    See profile
                  </ButtonText>
                </RowWrapper>
              </ItemWrapper>
            ))}
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

StatsPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default StatsPopup;
