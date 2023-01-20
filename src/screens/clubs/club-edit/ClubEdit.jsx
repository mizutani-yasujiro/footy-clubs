import React from 'react';
import Menu from '../../../components/common-components/menu/Menu';
import AppWrapper from '../../../components/common-components/wrappers/app-wrapper/AppWrapper';
import EditForm from '../../../components/screen-components/club/edit/EditForm';

const ClubEdit = (props) => {
  return (
    <AppWrapper>
      <Menu />
      <EditForm />
    </AppWrapper>
  );
};

ClubEdit.propTypes = {};

export default ClubEdit;
