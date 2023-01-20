import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Portal from '../../../../../../common-components/portal/Portal';
import ColumnWrapper from '../../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { APP_BACKGROUND_COLOR } from '../../../../../../../constants/themeColors';
import Dropdown from '../../../../../../common-components/dropdown/Dropdown';
import Text16 from '../../../../../../common-components/text/text-16/Text16';
import usersMock from '../../../../../../../mocks/usersMock';
import Button from '../../../../../../common-components/buttons/button/Button';

const Overlay = styled(ColumnWrapper)`
  background: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled(ColumnWrapper)`
  max-width: 600px;
  min-height: 300px;
  background: ${APP_BACKGROUND_COLOR};
  padding: 50px;
`;

const userList = usersMock.map((i) => ({
  value: i.name,
  key: i.name,
  ...i,
}));

const Modal = ({ onSelect, id }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = () => {
    if (selectedItem) onSelect(selectedItem, id);
  };

  return (
    <>
      <Portal>
        <Overlay>
          <Container>
            <Text16 style={{ marginBottom: 20 }}>Pick the player</Text16>
            <Dropdown onSelect={(i) => setSelectedItem(i)} data={userList} placeholder="Players" />
            <Button
              disabled={!selectedItem}
              onClick={handleSelect}
              style={{ marginTop: 20, alignSelf: 'flex-end' }}>
              Confirm
            </Button>
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

Modal.propTypes = {
  onSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Modal;
