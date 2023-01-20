import styled from 'styled-components';
import { ACCENT_THEME_COLOR, APP_BACKGROUND_COLOR, BORDER_COLOR } from '../../../../../constants/themeColors';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';

const Table = styled(ColumnWrapper)`
  border: 1px solid ${BORDER_COLOR};
  margin-left: 50px;
  @media (max-width: 1056px) {
    margin-left: 0;
  }
`;

const Header = styled(RowWrapper)`
  border-bottom: 1px solid ${BORDER_COLOR};
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

const ScoreWrapper = styled(ColumnWrapper)`
  align-items: center;
  border: 1px solid ${(props) => (props.isWin ? ACCENT_THEME_COLOR : BORDER_COLOR)};
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 40px;
  height: 40px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 60%;
  margin: 0 5px;
`;

const List = styled.ul`
  list-style: none;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    margin: 10px 0;
    padding: 10px 10px 10px 25px;
    justify-content: space-between;
    align-items: center;
    background: ${APP_BACKGROUND_COLOR};
    min-height: 60px;
    &:first-child {
      margin: 0 0 10px;
    }
  }
`;

const DropDownWrapper = styled.div`
  min-width: 200px;
`;

const TeamText = styled(Text24)`
  color: #bbbbbb;
  font-size: 18px;
  margin: 0 50px;
`;

const InfoWrapper = styled(ColumnWrapper)`
  padding: 50px 25px;
`;

const TableRowWrapper = styled(RowWrapper)`
  @media (max-width: 1056px) {
    flex-wrap: wrap;
  }
`;

const Border = styled.div`
  border-left: 1px solid ${BORDER_COLOR};
  @media (max-width: 768px) {
    display: none;
  }
`;

const Star = styled.img`
  width: 14px;
  margin: 0 2px;
`;

const ShadowedContainer = styled(ColumnWrapper)`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  padding: 14px;
  margin-top: 20px;
`

export { Border, Table, Header, ScoreWrapper, Avatar, List, DropDownWrapper, TeamText, InfoWrapper, TableRowWrapper, Star, ShadowedContainer };
