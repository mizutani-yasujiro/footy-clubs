import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  width: 96%;
  margin: 0 auto;
  padding-top: ${props => props.paddingTop ? props.paddingTop : '100px'};
  max-width: 1400px;
`

export default AppWrapper;