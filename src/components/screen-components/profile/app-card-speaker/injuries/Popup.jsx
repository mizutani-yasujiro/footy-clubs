import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import type from '../../../../../assets/icons/type.svg';
import { INJURY_STATUS, INJURY_TYPES } from '../../../../../constants/injuryData';
import { APP_BACKGROUND_COLOR } from '../../../../../constants/themeColors';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import Button from '../../../../common-components/buttons/button/Button';
import DatePicker from '../../../../common-components/date-picker/DatePicker';
import Dropdown from '../../../../common-components/dropdown/Dropdown';
import DropdownWithIcon from '../../../../common-components/dropdown/DropdownWithIcon';
import TextArea from '../../../../common-components/input/TextArea';
import Portal from '../../../../common-components/portal/Portal';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';

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

const Popup = ({ closePopup }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const formik = useFormik({
    initialValues: {
      type: '',
      notes: '',
    },
  });

  const isFormValid = () => {
    const { type, notes } = formik.values;
    return type && notes && selectedDate;
  };

  return (
    <>
      <Portal>
        <Overlay>
          <Container>
            <Text24 style={{ marginBottom: 30 }}>Injuries</Text24>
            <DatePicker
              value={selectedDate}
              onChange={(d) => setSelectedDate(d)}
              placeholder="Select Injury Date"
            />
            <DropdownWithIcon
              onSelect={(v) => formik.setFieldValue('type', v)}
              icon={type}
              data={INJURY_TYPES}
              placeholder="Injury Type"
            />
            <Dropdown data={INJURY_STATUS} placeholder="Status" />
            <div style={{ margin: '10px 0' }}></div>
            <TextArea
              name="notes"
              placeholder="Notes"
              onChange={formik.handleChange}
              value={formik.values.notes}
            />
            <RowWrapper style={{ justifyContent: 'space-between', marginTop: 20 }}>
              <ButtonText onClick={closePopup}>Cancel</ButtonText>
              <Button disabled={!isFormValid()} onClick={closePopup}>
                Confirm
              </Button>
            </RowWrapper>
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default Popup;
