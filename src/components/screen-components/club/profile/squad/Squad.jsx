import React from 'react';
import RequestItem from './request-item/RequestItem';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import { Border } from '../results/sharedStyledComponents';
import Text14 from '../../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text24 from '../../../../common-components/text/text-24/Text24';
import SquadItem from './squad-item/SquadItem';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import styled from 'styled-components';

const SquadContainer = styled(RowWrapper)`
  align-items: center;
  flex-wrap: wrap;
`;

const RequestColumn = styled(ColumnWrapper)`
  margin-left: 50px;
  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const SquadColumn = styled(ColumnWrapper)`
  margin-right: 50px;
  @media (max-width: 800px) {
    margin-right: 0;
  }
`;

const SquadWrapper = styled(BorderContainer)`
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

const Squad = () => {
  return (
    <>
      <SquadWrapper>
        <SquadColumn>
          <Text24>Squad</Text24>
          <SquadContainer>
            <SquadItem />
            <SquadItem />
            <SquadItem />
            <SquadItem />
            <SquadItem />
            <SquadItem />
          </SquadContainer>
        </SquadColumn>
        <Border />
        <RequestColumn autoWidth>
          <Text14 bold>Joining requests</Text14>
          <RequestItem
            name="De Marser"
            img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
          <RequestItem
            name="Diego Vertez"
            img="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
          />
          <RequestItem
            name="Leo Chavi"
            img="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
          />
        </RequestColumn>
      </SquadWrapper>
    </>
  );
};

export default Squad;
