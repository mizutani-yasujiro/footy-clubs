import styled from "styled-components";
import RowWrapper from "../../../common-components/wrappers/row-wrapper/RowWrapper";

const Wrapper = styled(RowWrapper)`
  align-self: flex-end;
  justify-content: flex-end;
  @media (max-width: 1054px) {
    justify-content: center;
  }
`;

const Row = styled(RowWrapper)`
  width: unset;
`;

export { Wrapper, Row };