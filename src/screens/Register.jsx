import React from 'react';
import styled from 'styled-components';
import registerImage from '../assets/ilustrations/registerImage.png';
import RowWrapper from '../components/common-components/wrappers/row-wrapper/RowWrapper';
import RegisterForm from '../components/screen-components/register/register-form/RegisterForm';

const RegisterWrapper = styled(RowWrapper)`
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 25px;
  @media (max-width: 400px) {
    padding: 0;
    height: auto;
  }
`;

const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Register = () => (
  <>
    <RegisterWrapper>
      <RegisterForm />
      <ImgWrapper>
        <img src={registerImage} alt="login" />
      </ImgWrapper>
    </RegisterWrapper>
  </>
);

export default Register;
