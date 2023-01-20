import React from 'react';
import styled from 'styled-components';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import galleryMock from '../../../../mocks/galleryMock';
import Uploader from '../../../common-components/uploader/Uploader';
import GridGallery from '../../../common-components/grid-gallery/GridGallery';

const Wrapper = styled(BorderContainer)`
  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const Space = styled.div`
  margin-right: 25px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Highlights = () => {
  return (
    <Wrapper>
      <Uploader onDrop={() => {}} />
      <Space></Space>
      <GridGallery gallery={galleryMock} />
    </Wrapper>
  );
};

export default Highlights;
