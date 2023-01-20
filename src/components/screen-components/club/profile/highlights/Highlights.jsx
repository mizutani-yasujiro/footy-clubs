import React from 'react';
import styled from 'styled-components';
import galleryMock from '../../../../../mocks/galleryMock';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import GridGallery from '../../../../common-components/grid-gallery/GridGallery';
import Uploader from '../../../../common-components/uploader/Uploader';

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

const Highlights = ({ isMyProfile }) => {
  return (
    <Wrapper>
      {isMyProfile ? (
        <>
          <Uploader onDrop={() => {}} />
          <Space></Space>
        </>
      ) : null}
      <GridGallery gallery={galleryMock} />
    </Wrapper>
  );
};

export default Highlights;
