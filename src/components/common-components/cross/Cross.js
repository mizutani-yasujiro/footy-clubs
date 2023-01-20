import styled from 'styled-components';

const Cross = styled.span`
  position: absolute;
  cursor: pointer;
  top: 25px;
  right: 15px;
  width: 30px;
  height: 30px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background: #fff;
  }
  &:after {
    transform: rotate(45deg);
  }
  &:before {
    transform: rotate(-45deg);
  }
`;

export default Cross