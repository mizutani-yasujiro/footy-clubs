import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR } from '../../../../constants/themeColors';
import ButtonText from '../../../common-components/buttons/button-text/ButtonText';
import Button from '../../../common-components/buttons/button/Button';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import UploadWrapper from '../../../common-components/upload-wrapper/UploadWrapper';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import Avatar from '../../shared/Avatar';
import { Header } from '../steps/ClubCommonComponents';
import Details from './Details';
import Location from './Location';
import Owners from './Owners';
import Payment from './Payment';
import Schedule from './Schedule';

const BigAvatar = styled(Avatar)`
  width: 160px;
  margin: 0;
  height: 160px;
`;

const EditFormWrapper = styled(RowWrapper)`
  justify-content: space-between;
  @media (max-width: 1260px) {
    flex-direction: column;
  }
`;

const Col = styled(ColumnWrapper)`
  width: auto;
  padding: 0 20px;
  border-right: 1px solid ${APP_BACKGROUND_COLOR};
`;

const EditForm = () => {
  const [profileImage, setProfileImage] = useState(
    'https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80',
  );

  const { push } = useHistory();
  const { id } = useParams();

  return (
    <ColumnWrapper>
      <BorderContainer>
        <EditFormWrapper>
          <Col>
            <Header>Club image</Header>
            <ColumnWrapper
              autoWidth
              style={{ alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
              <BigAvatar alt="profile-img" src={profileImage} />
              <UploadWrapper
                onDrop={(f) => {
                  setProfileImage(URL.createObjectURL(f[0]));
                }}>
                <ButtonText style={{ marginTop: 10 }}>Upload profile image</ButtonText>
              </UploadWrapper>
            </ColumnWrapper>
          </Col>
          <Col>
            <Owners />
          </Col>
          <Col>
            <Location />
            <div style={{ marginBottom: 30 }}></div>
            <Schedule />
          </Col>
          <Col>
            <Details />
            <div style={{ marginBottom: 30 }}></div>
            <Payment />
          </Col>
        </EditFormWrapper>
      </BorderContainer>
      <Button
        onClick={() => {
          push(`/clubs/${id}/profile`);
        }}
        style={{ alignSelf: 'flex-end', margin: '20px 0' }}>
        Save
      </Button>
    </ColumnWrapper>
  );
};

export default EditForm;
