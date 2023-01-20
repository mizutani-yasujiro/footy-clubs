import styled from 'styled-components';
import { CONTAINER_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../constants/themeColors';

const BannerContainer = styled.div`
  display: flex;
  border: 1px solid ${BORDER_COLOR};
  padding: 16px 25px;
  width: 100%;
  background: ${CONTAINER_BACKGROUND_COLOR};
  @media (max-width: 1054px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default BannerContainer;