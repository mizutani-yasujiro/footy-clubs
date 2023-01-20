import React, { useState } from 'react';
import FollowMyProfilePopup from '../../../../../common-components/follow-popup/FollowMyProfilePopup';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { Row, Wrapper } from '../../../../shared/banner/Stats';

const Statistics = () => {
  const [followHidden, setFollowHidden] = useState(true);
  return (
    <>
      {followHidden ? null : (
        <FollowMyProfilePopup followersOnly closePopup={() => setFollowHidden(true)} />
      )}
      <Wrapper>
        <Row>
          <ColumnWrapper onClick={() => setFollowHidden(false)} style={{ margin: '0 25px' }}>
            <Text24 style={{ margin: '0' }} bold>
              130
            </Text24>
            <Text14 style={{ margin: '0' }}>Followers</Text14>
          </ColumnWrapper>
          <ColumnWrapper style={{ margin: '0 25px' }}>
            <Text24 style={{ margin: '0' }} bold>
              120
            </Text24>
            <Text14 style={{ margin: '0' }}>Likes</Text14>
          </ColumnWrapper>
          <ColumnWrapper style={{ margin: '0 25px' }}>
            <Text24 style={{ margin: '0' }} bold>
              13
            </Text24>
            <Text14 style={{ margin: '0' }}>Spaces</Text14>
          </ColumnWrapper>
        </Row>
      </Wrapper>
    </>
  );
};

export default Statistics;
