import styled from 'styled-components';

const Text24 = styled.h1`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: ${props => props.bold ? "600" : "400"};
  color: #000000;
  margin: 4px 0;
`

export default Text24;