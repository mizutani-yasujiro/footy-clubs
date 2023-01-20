import React from 'react';
import styled from 'styled-components';
import galleryMock from '../../../../../../../mocks/galleryMock';
import Button from '../../../../../../common-components/buttons/button/Button';
import GridGallery from '../../../../../../common-components/grid-gallery/GridGallery';
import Text14 from '../../../../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { TableRowWrapper } from '../../sharedStyledComponents';

const StyledColumn = styled(ColumnWrapper)`
  max-width: 400px;
  margin-right: 50px;
  @media (max-width: 1056px) {
    margin: 0 0 20px;
  }
`;

const SummaryHighligts = ({ isMyProfile }) => {
  return (
    <TableRowWrapper>
      <StyledColumn>
        <Text14 bold style={{ marginBottom: 10 }}>
          Summary
        </Text14>
        <Text14>
          This was an amazing game, the blue team cheated and that{"'"}s why they won. Overall it
          was a good game and the Red Team should have really made all their opportunities count, so
          they deserved to lose.
        </Text14>
      </StyledColumn>
      <ColumnWrapper>
        <Text14 bold style={{ marginBottom: 10 }}>
          Hightlights
        </Text14>
        <GridGallery size={130} gallery={galleryMock} />
        {isMyProfile ? (
          <Button style={{ alignSelf: 'flex-end', margin: '20px 20px 0 0', position: 'relative' }}>
            <input
              type="file"
              style={{
                cursor: 'pointer',
                opacity: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />{' '}
            Upload the file
          </Button>
        ) : null}
      </ColumnWrapper>
    </TableRowWrapper>
  );
};

export default SummaryHighligts;
