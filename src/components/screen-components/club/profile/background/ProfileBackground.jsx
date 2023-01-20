import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonTextIcon from '../../../../common-components/buttons/button-text-icon/ButtonTextIcon';
import penIcon from '../../../../../assets/icons/whitePencil.svg';
import UploadWrapper from '../../../../common-components/upload-wrapper/UploadWrapper';

const Container = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .36);
  }
`;

const EditSection = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 15px;
  right: 15px;
`;

const ProfileBackground = () => {
  const [img, setImg] = useState(
    'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  );
  return (
    <Container src={img}>
      <EditSection>
        <UploadWrapper
          onDrop={(f) => {
            setImg(URL.createObjectURL(f[0]));
          }}>
          <ButtonTextIcon title="Edit" textColor="#CFD1D2" onClick={() => {}} icon={penIcon} />
        </UploadWrapper>
      </EditSection>
    </Container>
  );
};

export default ProfileBackground;
