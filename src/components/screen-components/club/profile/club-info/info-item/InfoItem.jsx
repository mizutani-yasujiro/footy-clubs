import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import BorderContainer from '../../../../../common-components/containers/border-container/BorderContainer';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';

const Wrapper = styled(BorderContainer)`
  padding: 8px 25px;
  margin: 10px 0;
  @media (max-width: 768px) {
    padding: 5px 25px;
  }
`;

const InfoItem = ({ icon, label, text, isLabelBold, children }) => {
  return (
    <Wrapper>
      <RowWrapper style={{ alignItems: children ? 'flex-start' : 'center' }}>
        <img style={{ marginTop: children ? 6 : 0 }} src={icon} alt={label} />
        {children ? (
          <ColumnWrapper style={{ marginLeft: '20px' }}>{children}</ColumnWrapper>
        ) : (
          <ColumnWrapper style={{ marginLeft: '20px' }}>
            <Text14 style={{ fontWeight: isLabelBold ? 'bold' : 'normal' }}>{label}</Text14>
            <Text14 style={!isLabelBold ? { fontWeight: 'bold' } : null}>{text}</Text14>
          </ColumnWrapper>
        )}
      </RowWrapper>
    </Wrapper>
  );
};

InfoItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  text: PropTypes.string,
  isLabelBold: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

InfoItem.defaultProps = {
  icon: '',
  label: '',
  text: '',
  isLabelBold: false,
  children: null,
};

export default InfoItem;
