import styled from "styled-components";
import { BORDER_COLOR, CONTAINER_BACKGROUND_COLOR } from "../../../../constants/themeColors";
import Button from "../../../common-components/buttons/button/Button";
import Text24 from "../../../common-components/text/text-24/Text24";
import ColumnWrapper from "../../../common-components/wrappers/column-wrapper/ColumnWrapper";
import RowWrapper from "../../../common-components/wrappers/row-wrapper/RowWrapper";

const Header = styled(Text24)`
  margin-bottom: 40px;
`;

const Container = styled.div`
  background: ${CONTAINER_BACKGROUND_COLOR};
  border: 1px solid ${BORDER_COLOR};
  flex-direction: column;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  @media (max-width: 1100px) {
    padding: 25px;
  }
`;

const InfoWrapper = styled(RowWrapper)`
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const MinWidthWrapper = styled(ColumnWrapper)`
  min-width: 460px;
  @media (max-width: 700px) {
    min-width: unset
  }
`

const BtnWrapper = styled(RowWrapper)`
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const GoogleMap = styled.div`
  width: 600px;
  height: 300px;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 50px;
  align-self: flex-end;
`;

const Column = styled(ColumnWrapper)`
  min-width: 300px;
  margin: ${(props) => (props.right ? '0 40px 0 0' : '0 0 0 40px')};
  @media (max-width: 1100px) {
    margin: 0;
    min-width: unset;
  }
`;

const OwnerItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  background: ${(props) => (props.normal ? '#FCFCFC' : '#F3F3F3')};
  margin-bottom: 5px;
`;

const StepsWrapper = styled(RowWrapper)`
  justify-content: center;
  padding: 50px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 25px 10px;
  }
`;


export {
  Header,
  Container,
  InfoWrapper,
  BtnWrapper,
  MinWidthWrapper,
  GoogleMap,
  SubmitButton,
  Column,
  OwnerItem,
  StepsWrapper
};
