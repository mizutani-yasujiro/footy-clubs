import styled from "styled-components";
import { ACCENT_THEME_COLOR } from "../../../constants/themeColors";

const Number = styled.div`
  height: 24px;
  width: 24px;
  background: ${ACCENT_THEME_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`;

export default Number;