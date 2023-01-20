import styled from 'styled-components';
import { BORDER_COLOR, MAIN_THEME_COLOR } from '../../../constants/themeColors';

const TextArea = styled.textarea`
  display: flex;
  width: 100%;
  resize: none;
  font-family: 'Montserrat', sans-serif;
  min-height: 100px;
  font-size: 12px;
  padding: 10px 5px;
  outline: none;
  border: 1px solid ${BORDER_COLOR};
  background: none;
  transition: 0.2s ease-in-out all;
  &:focus {
    border-color: ${MAIN_THEME_COLOR}
  }
`

export default TextArea;