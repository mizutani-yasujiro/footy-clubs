import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { userActions } from '../../../../redux/actions';

import styled from 'styled-components';
import emailIcon from '../../../../assets/icons/e-mail.svg';
import lockIcon from '../../../../assets/icons/lock.svg';
import { BORDER_COLOR, CONTAINER_BACKGROUND_COLOR } from '../../../../constants/themeColors';
import ButtonText from '../../../common-components/buttons/button-text/ButtonText';
import Button from '../../../common-components/buttons/button/Button';
import CheckBox from '../../../common-components/buttons/checkbox/CheckBox.jsx';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import Text12 from '../../../common-components/text/text-12/Text12';
import Text24 from '../../../common-components/text/text-24/Text24';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 30%;
  background: ${CONTAINER_BACKGROUND_COLOR};
  border-right: 1px solid ${BORDER_COLOR};
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    max-width: unset;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled(Text24)`
  margin-bottom: 50px;
`;

const SubmitButton = styled(Button)`
  margin-top: 50px;
`;

const ForgotPasswordButton = styled(ButtonText)`
  display: flex;
  align-self: center;
  font-weight: 400;
  margin-top: 10px;
  font-size: 12px;
  color: #404040;
`;

const SignUpButton = styled(ButtonText)`
  font-size: 12px;
  padding: 0 4px;
`;

const AccountCreateRowWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
`;

const ErrorMessage = styled.p`
  font-size: 10pt;
  color: red;
  margin-bottom: 10px;
`;

const LoginForm = (props) => {
  const { push } = useHistory();
  const [loggedInCheck, setLoggedInCheck] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const doLogin = () => {
    props.dispatch(userActions.login(formik.values.email, formik.values.password));
    //push('/profile')
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Header>Log In</Header>
          <ErrorMessage>{errMsg}</ErrorMessage>
          <InputWithIcon
            name="email"
            placeholder="E-mail Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            icon={emailIcon}
          />
          <InputWithIcon
            name="password"
            isPassword
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            icon={lockIcon}
          />
          <CheckBox
            onCheck={() => setLoggedInCheck(!loggedInCheck)}
            isChecked={loggedInCheck}
            text="Keep me logged in"
          />
          <SubmitButton
            disabled={!formik.values.email || !formik.values.password}
            onClick={doLogin}
            type="button"
            >
            Log In
          </SubmitButton>
          <ForgotPasswordButton type="button">Forgot password?</ForgotPasswordButton>
          <AccountCreateRowWrapper>
            <Text12>Don&apos;t have an account?</Text12>
            <SignUpButton type="button" onClick={() => push('/register')}>
              Sign Up
            </SignUpButton>
          </AccountCreateRowWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapDispatchToProps)(LoginForm);
