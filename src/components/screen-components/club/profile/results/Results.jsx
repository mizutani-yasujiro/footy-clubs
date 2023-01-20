import React, { useState } from 'react';
import styled from 'styled-components';
// import EditTable from './edit-table/EditTable';
import clubMatchInfoMock from '../../../../../mocks/clubMatchInfoMock';
import matchesMock from '../../../../../mocks/matchesMock';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import DetailsTable from './details-table/DetailsTable';
import EditTable from './edit-table/EditTable';
import MatchResultItems from './match-result-items/MatchResultItems';

const Wrapper = styled(BorderContainer)`
  @media (max-width: 1056px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Space = styled.div`
  margin: 20px 0 30px;
  @media (max-width: 1056px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Col = styled(ColumnWrapper)`
  @media (max-width: 1056px) {
    width: 100%;
  }
`;

const Results = () => {
  const [isEdited, setIsEdited] = useState(false);
  return (
    <Wrapper>
      <Col autoWidth>
        <Text24>Match Results</Text24>
        <Space>
          <Text14>April</Text14>
          <MatchResultItems data={matchesMock} />
        </Space>
      </Col>
      <ColumnWrapper>
        {isEdited ? (
          <EditTable onPublish={() => setIsEdited(false)} matchInfo={clubMatchInfoMock} />
        ) : (
          <DetailsTable onEdit={() => setIsEdited(true)} matchInfo={clubMatchInfoMock} />
        )}
      </ColumnWrapper>
    </Wrapper>
  );
};

export default Results;
