import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Picker from 'react-datepicker';
import styled from 'styled-components';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import Input from '../input/Input';
import calendarIcon from '../../../assets/icons/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';

const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
`;

class TextInput extends React.Component {
  render() {
    const { value, onClick, textPlaceholder } = this.props;
    return (
      <RowWrapper onClick={onClick} style={{ marginBottom: '20px', cursor: 'pointer' }}>
        <ImgWrapper>
          <img
            style={{ alignSelf: 'center', marginRight: '20px' }}
            src={calendarIcon}
            alt="date-picker"
          />
        </ImgWrapper>
        <Input readOnly style={{ cursor: 'pointer' }} placeholder={textPlaceholder} value={value} />
      </RowWrapper>
    );
  }
}

const DatePicker = ({ onChange, value, placeholder }) => {
  const [val, setVal] = useState(value);

  const handleChange = (date) => {
    setVal(date);
    onChange(date);
  };

  return (
    <>
      <Picker
        showYearDropdown
        dateFormat="MM-dd-yyyy"
        selected={val}
        onChange={(date) => handleChange(date)}
        customInput={<TextInput textPlaceholder={placeholder} />}
      />
    </>
  );
};

DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)])
    .isRequired,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  placeholder: 'Select Date',
};

TextInput.propTypes = {
  onClick: PropTypes.func,
  textPlaceholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextInput.defaultProps = {
  onClick: () => {},
  value: '',
  textPlaceholder: 'Select Date',
};

export default DatePicker;
