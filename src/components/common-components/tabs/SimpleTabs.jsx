import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RowWrapper from '../wrappers/row-wrapper/RowWrapper';
import { MAIN_THEME_COLOR } from '../../../constants/themeColors';
import ColumnWrapper from '../wrappers/column-wrapper/ColumnWrapper';
import Text14 from '../text/text-14/Text14';

const TabLink = styled(Text14)`
  text-transform: capitalize;
  margin: 0 20px 0 0;
  cursor: pointer;
`;

const Bar = styled(RowWrapper)`
  padding: 0 0 20px 0;
`;

const SimpleTabs = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <ColumnWrapper>
      <Bar>
        {tabs.map((tab) => (
          <TabLink
            bold={currentTab.title === tab.title}
            style={{ color: currentTab.title === tab.title ? MAIN_THEME_COLOR : '#404040' }}
            onClick={() => setCurrentTab(tab)}
            key={tab.title}>
            {tab.title}
          </TabLink>
        ))}
      </Bar>
      <RowWrapper>{currentTab.children}</RowWrapper>
    </ColumnWrapper>
  );
};

SimpleTabs.propTypes = {
  tabs: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        children: PropTypes.node,
      }),
    ),
  ]).isRequired,
};

export default SimpleTabs;
