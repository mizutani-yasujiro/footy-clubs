import styled from 'styled-components';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  width: ${props => props.autoWidth ? 'auto' : '100%'};
`

export default ColumnWrapper;