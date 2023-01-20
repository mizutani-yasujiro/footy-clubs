import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import fileUploadIcon from '../../../assets/icons/fileUpload.svg';
import Text14 from '../text/text-14/Text14';
import Button from '../buttons/button/Button';
import { GREY_TEXT_COLOR, ACCENT_THEME_COLOR } from '../../../constants/themeColors';

const Container = styled(ColumnWrapper)`
  position: relative;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  max-width: 400px;
  height: 400px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  transition: 0.2s ease-in-out all;
  border: 2px solid transparent;
  border-radius: 6px;
  &:hover {
    border: 2px solid ${ACCENT_THEME_COLOR};
  }
`;

const FileInput = styled.input`
  outline: none;
  border: none;
  background: transparent;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
`;

const Uploader = ({ onDrop }) => {
  return (
    <Container>
      <FileInput
        multiple
        onChange={(e) => {
          onDrop(e.target.files);
          e.currentTarget.value = null;
        }}
        type="file"
      />
      <img src={fileUploadIcon} alt="file-upload" />
      <Text14 style={{ color: GREY_TEXT_COLOR, margin: '10px 0' }}>Drag and drop file</Text14>
      <Button>Upload file</Button>
    </Container>
  );
};

Uploader.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default Uploader;
