import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import peopleIcon from '../../../../../assets/icons/people.svg';
import pinIcon from '../../../../../assets/icons/pin.svg';
import priceIcon from '../../../../../assets/icons/price.svg';
import userIcon from '../../../../../assets/icons/user.svg';
import { GREY_TEXT_COLOR } from '../../../../../constants/themeColors';
import ButtonEdit from '../../../../common-components/buttons/button-edit/ButtonEdit';
import Switch from '../../../../common-components/buttons/switch-button/Switch';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import { Border } from '../results/sharedStyledComponents';
import InfoItem from './info-item/InfoItem';
import Scheduler from './info-item/Scheduler';
import Invitation from './invitation/Invitation';
import PostsGallery from './posts-gallery/PostsGallery';
import SchedulePopup from './schedule-popup/SchedulePopup';

export const SpaceWrapper = styled(ColumnWrapper)`
  margin-bottom: 20px;
`;

const Col = styled(ColumnWrapper)`
  padding: 0 50px;
  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 0 20px;
  }
`;

export const ClubInfoWrapper = styled(BorderContainer)`
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ClubInfo = ({ isMyProfile }) => {
  const { push } = useHistory();
  const { id } = useParams();
  const [popupHidden, setPopupHidden] = useState(true);
  const [isAdmin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [schedules, setSchedules] = useState([
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

  const addSchedule = (i) => {
    setSchedules([...schedules, i]);
    setPopupHidden(true);
  };

  return (
    <ClubInfoWrapper>
      <Col style={{ maxWidth: 550 }}>
        <RowWrapper style={{ justifyContent: 'space-between', marginBottom: '20px' }}>
          <Text24>Tuesday Night FC</Text24>
          <ButtonEdit
            onClick={() => {
              push(`/clubs/${id}/edit-profile`);
            }}
          />
        </RowWrapper>
        <SpaceWrapper>
          <Text14 style={{ color: GREY_TEXT_COLOR }}>Club description</Text14>
          <Text14>
            We are a group of friends who play football every week for fun … The standard is high
            and we look forward to playing every week … On the pitch we are not friends - we are
            enemies.
          </Text14>
        </SpaceWrapper>
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
          <Scheduler schedules={schedules} onSchedule={() => setPopupHidden(false)} />
          {popupHidden ? null : (
            <SchedulePopup closePopup={() => setPopupHidden(true)} onAdd={(i) => addSchedule(i)} />
          )}
        </InfoItem>
        <InfoItem icon={priceIcon} label="Price" text="$5" />
      </Col>
      <Border />
      <Col>
        {isAdmin ? (
          <>
            <RowWrapper style={{ justifyContent: 'flex-end', marginBottom: 20 }}>
              <Switch
                text="Admin view"
                isOn={showAdmin}
                onChange={() => setShowAdmin(!showAdmin)}
              />
            </RowWrapper>
            {showAdmin ? <Invitation /> : <PostsGallery isMyProfile={isMyProfile} />}
          </>
        ) : null}
      </Col>
    </ClubInfoWrapper>
  );
};

export default ClubInfo;
