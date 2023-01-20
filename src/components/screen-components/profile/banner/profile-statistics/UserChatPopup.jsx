import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BORDER_COLOR } from '../../../../../constants/themeColors';
import Cross from '../../../../common-components/cross/Cross';
import Overlay from '../../../../common-components/overlay/Overlay';
import Portal from '../../../../common-components/portal/Portal';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import ChatDetails from '../../../chat/ChatDetails';
import ChatMessagePanel from '../../../chat/ChatMessagePanel';

const Container = styled(RowWrapper)`
  min-height: 600px;
  justify-content: space-between;
  max-width: 1400px;
  padding: 25px;
  background: #ffffff;
  @media (max-width: 968px) {
    flex-wrap: wrap;
  }
`;

const DetailsWrapper = styled(ColumnWrapper)`
  max-width: 300px;
  padding: 25px;
  margin-right: 25px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const UserChatPopup = ({ closePopup }) => {
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
            <DetailsWrapper>
              <ChatDetails />
            </DetailsWrapper>
            <ColumnWrapper style={{ border: `1px solid ${BORDER_COLOR}` }}>
              <ChatMessagePanel />
            </ColumnWrapper>
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

UserChatPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default UserChatPopup;
