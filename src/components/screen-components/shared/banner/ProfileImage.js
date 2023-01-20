import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-self: center;
  margin-right: 25px;
  @media (max-width: 1054px) {
    margin-right: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 126px;
  height: 126px;
  z-index: 2;
  background: rgba(0, 0, 0, .16);
  top: 0;
  left: 0;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 126px;
  height: 126px;
  object-fit: cover;
  border-radius: 50%;
  align-self: center;
`;

const ProfileImage = ({ src, alt, style }) => (
  <Wrapper style={style}>
    <Image src={src} alt={alt} />
    <Overlay />
  </Wrapper>
);

ProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
}

ProfileImage.defaultProps = {
  style: {}
}

export default ProfileImage;