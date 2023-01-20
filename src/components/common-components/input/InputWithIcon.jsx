import React, { useState, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import Input from './Input';
import eyeIcon from '../../../assets/icons/eye.svg';
import eyeOffIcon from '../../../assets/icons/eye-off.svg';

const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
`;

const ShowPasswordBtn = styled.div`
  position: absolute;
  right: 4px;
  bottom: 20%;
  cursor: pointer;
`;

/* This component is created for formik purpose */
// eslint-disable-next-line react/display-name
const InputWithIcon = forwardRef(
  ({ onChange, value, name, isPassword, placeholder, icon }, ref) => {
    const [val, setVal] = useState(value);
    const [showPassword, setShowPassword] = useState(isPassword);

    const handleChange = (e) => {
      setVal(e.target.value);
      onChange(e);
    };

    useImperativeHandle(ref, () => ({
      clear() {
        setVal('');
        onChange({ target: { value: '' } });
      },
    }));

    return (
      <>
        <RowWrapper style={{ marginBottom: '20px', position: 'relative' }}>
          <ImgWrapper>
            <img style={{ alignSelf: 'center', marginRight: '20px' }} src={icon} alt={name} />
          </ImgWrapper>
          <Input
            id={name}
            name={name}
            type={showPassword ? 'password' : 'text'}
            placeholder={placeholder}
            onChange={handleChange}
            value={val}
          />
          {isPassword ? (
            <ShowPasswordBtn onClick={() => setShowPassword(!showPassword)}>
              <img
                style={{ alignSelf: 'center' }}
                src={showPassword ? eyeIcon : eyeOffIcon}
                alt={name}
              />
            </ShowPasswordBtn>
          ) : null}
        </RowWrapper>
      </>
    );
  },
);

InputWithIcon.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  placeholder: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

InputWithIcon.defaultProps = {
  isPassword: false,
  placeholder: '',
};

export default InputWithIcon;
