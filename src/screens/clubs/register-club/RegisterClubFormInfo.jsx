import React from 'react';
import Menu from '../../../components/common-components/menu/Menu';
import AppWrapper from '../../../components/common-components/wrappers/app-wrapper/AppWrapper';
import ClubInfoSteps from '../../../components/screen-components/club/steps/ClubInfoSteps';

const RegisterClubFormInfo = () => (
  <>
    <AppWrapper paddingTop="50px">
      <Menu />
      <ClubInfoSteps />
    </AppWrapper>
  </>
);

export default RegisterClubFormInfo;
