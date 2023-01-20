import React, { useState } from 'react';
import styled from 'styled-components';
import peopleIcon from '../../../../assets/icons/people.svg';
import pinIcon from '../../../../assets/icons/pin.svg';
import priceIcon from '../../../../assets/icons/price.svg';
import userIcon from '../../../../assets/icons/user.svg';
import { GREY_TEXT_COLOR, MAIN_THEME_COLOR } from '../../../../constants/themeColors';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import Counter from '../../../common-components/counter/Counter';
import Text14 from '../../../common-components/text/text-14/Text14';
import Text24 from '../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import LineUp from '../../profile/fixture/line-up/LineUp';
import TeamStatusEdit from '../../profile/fixture/team-status/TeamStatusEdit';
import InfoItem from '../profile/club-info/info-item/InfoItem';
import Scheduler from '../profile/club-info/info-item/Scheduler';

export const SpaceWrapper = styled(ColumnWrapper)`
  margin-bottom: 20px;
`;

const Col = styled(ColumnWrapper)`
  padding: 0 50px;
  @media (max-width: 1260px) {
    align-items: center;
    margin: 20px 0;
    padding: 0 20px;
  }
`;

export const ClubInfoWrapper = styled(BorderContainer)`
  justify-content: space-between;
  @media (max-width: 1260px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ClubPromptForm = () => {
  const [schedules] = useState([
    {
      start: '21.00',
      end: '22.00',
      day: 'Tuesday',
      freq: 'Every Week',
    },
    {
      start: '19.00',
      end: '21.00',
      day: 'Wednesday',
      freq: 'Every Day',
    },
  ]);

  return (
    <ClubInfoWrapper>
      <Col style={{ maxWidth: 550 }}>
        <ColumnWrapper style={{ marginBottom: 20 }}>
          <Text24 style={{ marginBottom: 15 }}>Next Game In</Text24>
          <Counter />
          <Text14 style={{ marginTop: 40, color: MAIN_THEME_COLOR }}>Next game</Text14>
          <Text24>
            <strong>Geek Football</strong> - Thursday - <strong>2100-2200</strong>
          </Text24>
        </ColumnWrapper>
        <Text14 style={{ color: GREY_TEXT_COLOR }}>Club information</Text14>
        <InfoItem icon={userIcon} label="Owner" text="Mark J Whittaker" />
        <InfoItem
          icon={pinIcon}
          label="Millwall Community Trust"
          isLabelBold
          text="Lewisham Lions Centre, Bolina Rd, Sermondsey, London SE16 3Ld"
        />
        <InfoItem icon={peopleIcon} label="Aside" text="7 Aside" />
        <InfoItem icon={peopleIcon}>
          <Scheduler schedules={schedules} />
        </InfoItem>
        <InfoItem icon={priceIcon} label="Price" text="$5" />
      </Col>
      <Col>
        <Text24 style={{ alignSelf: 'center', marginBottom: 15 }}>Team Status</Text24>
        <TeamStatusEdit noEdit onSubmit={() => {}} />
      </Col>
      <Col>
        <Text24 style={{ alignSelf: 'center', marginBottom: 15 }}>Team Status</Text24>
        <div style={{ maxWidth: 400, width: '100%' }}>
          <LineUp noEdit />
        </div>
      </Col>
    </ClubInfoWrapper>
  );
};

export default ClubPromptForm;
