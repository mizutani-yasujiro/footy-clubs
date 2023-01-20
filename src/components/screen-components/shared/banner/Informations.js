import styled from 'styled-components';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';

const ShortInfoRow = styled(RowWrapper)`
  @media (max-width: 1054px) {
    margin: 0 0 40px;
  }
`;

const ShortInfoCol = styled(ColumnWrapper)`
  margin-right: 50px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-right: 30px;
  }
  &:last-child {
    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

const NameCol = styled(ColumnWrapper)`
  margin-bottom: 20px;
  @media (max-width: 1054px) {
    margin: 20px 0;
    justify-content: center;
    align-items: center;
    .nationality-wrapper {
      justify-content: center;
    }
  }
`;

export { ShortInfoRow, ShortInfoCol, NameCol };