import React, { useState } from 'react';
import clockIcon from '../../../../assets/icons/clock.svg';
import flagIcon from '../../../../assets/icons/flag.svg';
import updateIcon from '../../../../assets/icons/update.svg';
import { FREQUENCY } from '../../../../constants/club-data/RegisterClubData';
import DatePicker from '../../../common-components/date-picker/DatePicker';
import DropdownWithIcon from '../../../common-components/dropdown/DropdownWithIcon';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import { Header } from '../steps/ClubCommonComponents';

const Schedule = () => {
  const [time, setTime] = useState({ start: '', end: '' });
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <>
      <Header>Club game schedule</Header>
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
    </>
  );
};

export default Schedule;
