import { useFormik } from 'formik';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import cashIcon from '../../../../../../assets/icons/cash.svg';
import clockIcon from '../../../../../../assets/icons/clock.svg';
import flagIcon from '../../../../../../assets/icons/flag.svg';
import genderIcon from '../../../../../../assets/icons/gender.svg';
import peopleIcon from '../../../../../../assets/icons/people.svg';
import updateIcon from '../../../../../../assets/icons/update.svg';
import {
  FREQUENCY,
  GENDER,
  PLAYER_COST,
  TEAM_SIZE,
} from '../../../../../../constants/club-data/RegisterClubData';
import { APP_BACKGROUND_COLOR } from '../../../../../../constants/themeColors';
import ButtonText from '../../../../../common-components/buttons/button-text/ButtonText';
import Button from '../../../../../common-components/buttons/button/Button';
import DatePicker from '../../../../../common-components/date-picker/DatePicker';
import DropdownWithIcon from '../../../../../common-components/dropdown/DropdownWithIcon';
import InputWithIcon from '../../../../../common-components/input/InputWithIcon';
import Portal from '../../../../../common-components/portal/Portal';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';

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

const SchedulePopup = ({ closePopup, onAdd }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [frequency, setFrequency] = useState('');
  const formik = useFormik({
    initialValues: {
      start: '',
      end: '',
    },
  });

  const handleAdd = () => {
    const { start, end } = formik.values;
    onAdd({
      start,
      end,
      day: moment(selectedDate).format('dddd'),
      freq: frequency.value,
    });
  };

  const isFormValid = () => {
    const { start, end } = formik.values;
    return start && end && selectedDate && frequency;
  };

  return (
    <>
      <Portal>
        <Overlay>
          <Container>
            <Text24 style={{ marginBottom: 30 }}>Additional Schedule</Text24>
            <DatePicker
              value={selectedDate}
              onChange={(d) => setSelectedDate(d)}
              placeholder="Schedule"
            />
            <InputWithIcon
              name="start"
              placeholder="Start Time"
              onChange={formik.handleChange}
              value={formik.values.start}
              icon={clockIcon}
            />
            <InputWithIcon
              name="end"
              placeholder="End Time"
              onChange={formik.handleChange}
              value={formik.values.end}
              icon={flagIcon}
            />
            <DropdownWithIcon data={TEAM_SIZE} icon={genderIcon} placeholder="Team Size" />
            <DropdownWithIcon data={GENDER} icon={peopleIcon} placeholder="Gender" />
            <DropdownWithIcon
              onSelect={(i) => setFrequency(i)}
              data={FREQUENCY}
              icon={updateIcon}
              placeholder="Game Frequency"
            />
            <DropdownWithIcon data={PLAYER_COST} icon={cashIcon} placeholder="Cost Per Player" />
            <RowWrapper style={{ justifyContent: 'space-between', marginTop: 20 }}>
              <ButtonText onClick={closePopup}>Cancel</ButtonText>
              <Button disabled={!isFormValid()} onClick={handleAdd}>
                Confirm
              </Button>
            </RowWrapper>
          </Container>
        </Overlay>
      </Portal>
    </>
  );
};

SchedulePopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default SchedulePopup;
