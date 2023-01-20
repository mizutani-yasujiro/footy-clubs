import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  CONTAINER_BACKGROUND_COLOR,
  ACCENT_THEME_COLOR,
  BORDER_COLOR,
} from '../../../../constants/themeColors';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text12 from '../../../common-components/text/text-12/Text12';
import Text14 from '../../../common-components/text/text-14/Text14';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';

const StatusWrapper = styled.div`
  padding: 50px;
  width: 140px;
  height: 140px;
  background-color: ${CONTAINER_BACKGROUND_COLOR};
  border: 1px solid ${(props) => (props.active ? ACCENT_THEME_COLOR : BORDER_COLOR)};
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  position: absolute;
  right: -80px;
  bottom: 50%;
  width: 70px;
  height: 1px;
  background: ${BORDER_COLOR};
  @media (max-width: 1100px) {
    height: 70px;
    width: 1px;
    right: 50%;
    bottom: -126px;
  }
`;

const Row = styled(RowWrapper)`
  position: relative;
  align-self: center;
`;

const StepItemWrapper = styled(ColumnWrapper)`
  margin-right: ${(props) => (props.divider ? '90px' : '0')};
  @media (max-width: 1100px) {
    margin: ${(props) => (props.divider ? '0 0 90px' : '0')};
  }
`;

const StepItem = ({ active, icon, header, text, divider }) => (
  <>
    <StepItemWrapper divider={divider} autoWidth>
      <Row autoWidth>
        <StatusWrapper active={active}>{icon}</StatusWrapper>
        {divider ? <Divider /> : null}
      </Row>
      <Text14
        style={{
          textAlign: 'center',
          margin: '10px 0 0',
          color: active ? '#404040' : BORDER_COLOR,
        }}
        bold>
        {header}
      </Text14>
      <Text12 style={{ textAlign: 'center', color: active ? '#404040' : BORDER_COLOR }}>
        {text}
      </Text12>
    </StepItemWrapper>
  </>
);

StepItem.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  divider: PropTypes.bool,
};

StepItem.defaultProps = {
  active: false,
  divider: true,
};

export default StepItem;
