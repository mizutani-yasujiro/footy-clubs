import React, { useState } from 'react';
import PropTypes from 'prop-types';
import flagIcon from '../../../../../assets/icons/flag.svg';
import clockIcon from '../../../../../assets/icons/clock.svg';
import updateIcon from '../../../../../assets/icons/update.svg';
import Button from '../../../../common-components/buttons/button/Button';
import InputWithIcon from '../../../../common-components/input/InputWithIcon';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import { Container, Header, BtnWrapper, MinWidthWrapper } from '../ClubCommonComponents';
import DatePicker from '../../../../common-components/date-picker/DatePicker';
import DropdownWithIcon from '../../../../common-components/dropdown/DropdownWithIcon';
import { FREQUENCY } from '../../../../../constants/club-data/RegisterClubData';

const ClubSchedule = ({ functions }) => {
  const [time, setTime] = useState({ start: '', end: '' });
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <>
      <Container>
        <Header>Club game schedule</Header>
        <MinWidthWrapper>
          <DatePicker
            value={selectedDate}
            onChange={(d) => setSelectedDate(d)}
            placeholder="Select Date"
          />
          <InputWithIcon
            name="start"
            placeholder="Start Time"
            onChange={({ target: { value } }) => setTime({ ...time, start: value })}
            value={time.start}
            icon={clockIcon}
          />
          <DropdownWithIcon data={FREQUENCY} icon={updateIcon} placeholder="Game Frequency" />
          <InputWithIcon
            name="end"
            placeholder="End Time"
            onChange={({ target: { value } }) => setTime({ ...time, end: value })}
            value={time.end}
            icon={flagIcon}
          />
        </MinWidthWrapper>
        <BtnWrapper>
          <ButtonText onClick={functions.handlePreviousStep}>Previous step</ButtonText>
          <Button onClick={functions.handleNextStep}>Next step</Button>
        </BtnWrapper>
      </Container>
    </>
  );
};

ClubSchedule.propTypes = {
  functions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ClubSchedule;
