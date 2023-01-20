import styled from 'styled-components';
import { ACCENT_THEME_COLOR, BORDER_COLOR, CONTAINER_BACKGROUND_COLOR } from '../../../../constants/themeColors';

const Button = styled.button`
  display: flex;
  justify-content: center;
  font-size: ${props => props.small ? '12px' : '14px'};
  padding: ${props => props.small ? '4px 8px' : '10px 25px'};
  font-family: 'Montserrat', sans-serif;
  outline: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: ${props => props.disabled ? BORDER_COLOR : ACCENT_THEME_COLOR};
  color: ${CONTAINER_BACKGROUND_COLOR};
  transition: 0.2s ease-in-out all;
  min-width: ${props => props.small ? 'unset' : '140px'};
  &:hover {
    opacity: .8;
  }
`

export default Button;