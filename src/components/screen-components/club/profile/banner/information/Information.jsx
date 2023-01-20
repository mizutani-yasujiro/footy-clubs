import React from 'react';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { ShortInfoRow, ShortInfoCol, NameCol } from '../../../../shared/banner/Informations';
import { MAIN_THEME_COLOR } from '../../../../../../constants/themeColors';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../../common-components/text/text-16/Text16';
import Text24 from '../../../../../common-components/text/text-24/Text24';

const Information = () => (
  <>
    <RowWrapper style={{ width: 'auto', alignSelf: 'center' }}>
      <ColumnWrapper>
        <NameCol>
          <Text14 style={{ color: MAIN_THEME_COLOR, cursor: 'pointer' }}>Follow</Text14>
          <Text24>Tuesday Night FC</Text24>
        </NameCol>
        <ShortInfoRow>
          <ShortInfoCol>
            <Text14>Est</Text14>
            <Text16 bold>2020</Text16>
          </ShortInfoCol>
          <ShortInfoCol>
            <Text14>Members</Text14>
            <Text16 bold>30</Text16>
          </ShortInfoCol>
          <ShortInfoCol>
            <Text14>Games</Text14>
            <Text16 bold>10</Text16>
          </ShortInfoCol>
          <ShortInfoCol>
            <Text14 style={{ whiteSpace: 'nowrap' }}>A Side</Text14>
            <Text16 bold>72</Text16>
          </ShortInfoCol>
        </ShortInfoRow>
      </ColumnWrapper>
    </RowWrapper>
  </>
);

export default Information;
