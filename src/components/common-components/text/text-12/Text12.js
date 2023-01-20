import styled from 'styled-components';

const Text12 = styled.p`
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${props => props.bold ? "600" : "400"};
  color: #404040;
  margin: 2px 0;
`

export default Text12;