import React from 'react';
import AppWrapper from '../../components/common-components/wrappers/app-wrapper/AppWrapper';
import Menu from '../../components/common-components/menu/Menu';
import EditForm from '../../components/screen-components/profile/edit-form/EditForm';

const EditProfile = (props) => (
  <>
    <EditForm setIsModalOpen={props.setIsModalOpen}/>
    {/* <AppWrapper>
      <Menu />
      <EditForm />
    </AppWrapper> */}
  </>
);

export default EditProfile;
