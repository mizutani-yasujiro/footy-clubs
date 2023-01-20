import styled from 'styled-components';
import { APP_BACKGROUND_COLOR } from '../../../constants/themeColors';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';

const ItemWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${(props) => (props.dark ? APP_BACKGROUND_COLOR : '#FFFFFF')};
`;

export default ItemWrapper;