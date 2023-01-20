import styled from 'styled-components';

const Text16 = styled.p`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${props => props.bold ? "600" : "400"};
  color: #000000;
  margin: 3px 0;
`

export default Text16;