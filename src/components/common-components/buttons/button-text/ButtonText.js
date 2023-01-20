import styled from 'styled-components';
import { MAIN_THEME_COLOR, BORDER_COLOR } from '../../../../constants/themeColors';

const ButtonText = styled.button`
  display: flex;
  font-size: 12px;
  padding: 10px 5px;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: none;
  color: ${props => props.disabled ? BORDER_COLOR : MAIN_THEME_COLOR};
  transition: 0.2s ease-in-out all;
  &:hover {
    opacity: .45;
  }
`

export default ButtonText;