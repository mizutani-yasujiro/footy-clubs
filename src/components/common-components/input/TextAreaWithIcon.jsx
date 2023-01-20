import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import TextArea from './TextArea';

const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
`;

/* This component is created for formik purpose */
const TextAreaWithIcon = ({ onChange, value, name, isPassword, placeholder, icon }) => {
  const [val, setVal] = useState(value);

  const handleChange = (e) => {
    setVal(e.target.value);
    onChange(e);
  };

  return (
    <>
      <RowWrapper style={{ marginBottom: '20px' }}>
        <ImgWrapper>
          <img style={{ alignSelf: 'flex-start', marginRight: '20px' }} src={icon} alt={name} />
        </ImgWrapper>
        <TextArea
          id={name}
          name={name}
          type={isPassword ? 'password' : 'text'}
          placeholder={placeholder}
          onChange={handleChange}
          value={val}
        />
      </RowWrapper>
    </>
  );
};

TextAreaWithIcon.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

TextAreaWithIcon.defaultProps = {
  isPassword: false,
  placeholder: '',
};

export default TextAreaWithIcon;
