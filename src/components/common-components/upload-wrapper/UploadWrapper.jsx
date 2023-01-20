import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';

const Container = styled(ColumnWrapper)`
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

const UploadWrapper = ({ onDrop, children, accept }) => {
  return (
    <Container autoWidth>
      <FileInput
        multiple
        onChange={(e) => {
          onDrop(e.target.files);
          e.currentTarget.value = null;
        }}
        accept={accept}
        type="file"
      />
      {children}
    </Container>
  );
};

UploadWrapper.propTypes = {
  onDrop: PropTypes.func.isRequired,
  accept: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

UploadWrapper.defaultProps = {
  accept: '*',
};

export default UploadWrapper;
