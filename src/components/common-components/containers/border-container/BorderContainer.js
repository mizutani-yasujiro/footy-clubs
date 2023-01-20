import styled from 'styled-components';
import { CONTAINER_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../constants/themeColors';

const BorderContainer = styled.div`
  background: ${CONTAINER_BACKGROUND_COLOR};
  border: 1px solid ${BORDER_COLOR};
  display: flex;
  padding: 50px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`

export default BorderContainer;