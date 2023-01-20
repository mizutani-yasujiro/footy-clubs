import styled from 'styled-components';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';

const Overlay = styled(ColumnWrapper)`
  background: rgba(0, 0, 0, 0.39);
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 50px;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export default Overlay