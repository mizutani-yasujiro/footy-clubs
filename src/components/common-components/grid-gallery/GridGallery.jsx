import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';

const Container = styled.div`
  display: grid;
  padding-right: 20px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(${(props) => props.size.toString() + 'px'}, 1fr));
  grid-gap: ${(props) => (props.size / 10).toString() + 'px'};
  grid-auto-flow: dense;
  max-height: 500px;
  overflow-y: auto;
  img {
    width: 100%;
    height: ${(props) => props.size.toString() + 'px'};
    object-fit: cover;
    cursor: pointer;
    transition: 0.2s ease-in-out opacity;
    &:hover {
      opacity: 0.8;
    }
  }
  @media (max-width: 800px) {
    margin: 20px 0;
  }
`;

const GridGallery = ({ gallery, size, onClick }) => {
  return (
    <RowWrapper>
      <Container size={size}>
        {gallery.map((item) => (
          <img key={item.title} src={item.image} alt={item.title} />
        ))}
      </Container>
    </RowWrapper>
  );
};

GridGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onClick: PropTypes.func,
  size: PropTypes.func,
};

GridGallery.defaultProps = {
  onClick: null,
  size: 240,
};

export default GridGallery;
