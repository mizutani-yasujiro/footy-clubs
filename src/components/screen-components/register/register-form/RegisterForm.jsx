import React, { useState } from 'react';

import { connect } from 'react-redux';
import { userActions } from '../../../../redux/actions';

import styled from 'styled-components';
import { CONTAINER_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../constants/themeColors';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import lockIcon from '../../../../assets/icons/lock.svg';
import emailIcon from '../../../../assets/icons/e-mail.svg';
import userIcon from '../../../../assets/icons/user.svg';
import { useFormik } from 'formik';
import Text24 from '../../../common-components/text/text-24/Text24';
import Text12 from '../../../common-components/text/text-12/Text12';
import Button from '../../../common-components/buttons/button/Button';
import CheckBox from '../../../common-components/buttons/checkbox/CheckBox.jsx';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import ButtonText from '../../../common-components/buttons/button-text/ButtonText';
import { useHistory } from 'react-router-dom';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import CheckInformation from '../../../common-components/information/CheckInformation';
import registerPasswordValidators from '../../../../tools/validators/registerPasswordValidators';
import { useEffect } from 'react';

const Container = styled.div`
  background: ${CONTAINER_BACKGROUND_COLOR};
  border: 1px solid ${BORDER_COLOR};
  padding: 50px 120px;
  display: flex;
  justify-content: center;
  algin-items: center;
  @media (max-width: 1320px) {
    padding: 50px;
  }
  @media (max-width: 1000px) {
    max-width: unset;
    width: 100%;
  }
  @media (max-width: 400px) {
    padding: 25px 20px;
  }
`;

const Wrapper = styled.form`
  width: 100%;
  width: 380px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 400px) {
    width: auto;
  }
`;

const Header = styled(Text24)`
  margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
  margin-top: 50px;
`;

const SignUpButton = styled(ButtonText)`
  font-size: 12px;
  padding: 0 4px;
`;

const AccountCreateRowWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const passwordValidatorsObj = {
  lowerCase: false,
  upperCase: false,
  number: false,
  special: false,
  min: false,
};

const RegisterForm = (props) => {
  const { push } = useHistory();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [policyChecked, setPolicyChecked] = useState(false);
  const [passwordValidators, setPasswordValidators] = useState(passwordValidatorsObj);

  const validateForm = (values) => {
    const { email, password, name, lastname, username } = values;
    const {
      upperCaseRegex,
      lowerCaseRegex,
      numberRegex,
      minRegex,
      specialRegex,
    } = registerPasswordValidators;

    const lowerCase = lowerCaseRegex.test(password);
    const upperCase = upperCaseRegex.test(password);
    const number = numberRegex.test(password);
    const special = specialRegex.test(password);
    const min = minRegex.test(password);
    const isPasswordValid = lowerCase && upperCase && number && special && min;

    setPasswordValidators({
      ...passwordValidators,
      lowerCase,
      upperCase,
      number,
      special,
      min,
    });

    if (!email || !password || !name || !lastname || !username || !policyChecked || !isPasswordValid)
      setButtonDisabled(true);
    else setButtonDisabled(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
    validate: (values) => validateForm(values),
  });

  const doRegister = () => {
    props.register(formik.values);
    push('/');
  }

  useEffect(() => {
    validateForm(formik.values);
    // eslint-disable-next-line
  }, [policyChecked]);

  return (
    <>
      <Container>
        <Wrapper onSubmit={formik.handleSubmit}>
          <Header>Get started with your account</Header>
          <Text12 style={{ marginBottom: '30px' }}>
            Talk Football. Build a personal qqqqq profile. Create your own qqqqqq. Organise qqqqqq
            with friends. Do it all with SiteName.
          </Text12>
          <InputWithIcon
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.password}
            icon={userIcon}
          />
          <InputWithIcon
            name="lastname"
            placeholder="Lastname"
            onChange={formik.handleChange}
            value={formik.values.password}
            icon={userIcon}
          />
          <InputWithIcon
            name="email"
            placeholder="E-mail Address"
            onChange={formik.handleChange}
            value={formik.values.password}
            icon={emailIcon}
          />
          <InputWithIcon
            name="username"
            placeholder="Username"
            onChange={formik.handleChange}
            value={formik.values.username}
            icon={userIcon}
          />
          <InputWithIcon
            name="password"
            isPassword
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.email}
            icon={lockIcon}
          />
          <Text12 style={{ marginTop: '15px' }} bold>
            Password should contain:
          </Text12>
          <RowWrapper style={{ margin: '5px 0 30px 0' }}>
            <ColumnWrapper autoWidth style={{ marginRight: '10px' }}>
              <CheckInformation title="One lower character" active={passwordValidators.lowerCase} />
              <CheckInformation
                title="One uppercase character"
                active={passwordValidators.upperCase}
              />
              <CheckInformation title="One number" active={passwordValidators.number} />
            </ColumnWrapper>
            <ColumnWrapper autoWidth style={{ marginLeft: '10px' }}>
              <CheckInformation title="One special character" active={passwordValidators.special} />
              <CheckInformation title="8 characters minimum" active={passwordValidators.min} />
            </ColumnWrapper>
          </RowWrapper>
          <CheckBox
            onCheck={() => setPolicyChecked(!policyChecked)}
            isChecked={policyChecked}
            text="I accept SiteName's Privacy Policy and Terms"
          />
          <SubmitButton disabled={buttonDisabled} onClick={doRegister} type="submit">
            Get started
          </SubmitButton>
          <AccountCreateRowWrapper>
            <Text12>Already have an account?</Text12>
            <SignUpButton type="button" onClick={() => push('/')}>
              Log In
            </SignUpButton>
          </AccountCreateRowWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

function mapDispatchToProps(dispatch){
  return {
      register:(user)=> dispatch(userActions.register(user))
  };
}

export default connect(null, mapDispatchToProps)(RegisterForm);
