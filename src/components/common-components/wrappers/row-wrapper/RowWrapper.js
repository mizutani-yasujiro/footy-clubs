import styled from 'styled-components';

const RowWrapper = styled.div`
  display: flex;
  width: ${props => props.autoWidth ? 'auto' : '100%'};
`

export default RowWrapper;