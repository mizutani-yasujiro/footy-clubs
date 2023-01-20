import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/common-components/menu/Menu';
import Tabs from '../../components/common-components/tabs/Tabs';
import AppWrapper from '../../components/common-components/wrappers/app-wrapper/AppWrapper';
import RowWrapper from '../../components/common-components/wrappers/row-wrapper/RowWrapper';
import Injuries from '../../components/screen-components/profile/app-card-speaker/injuries/Injuries';
import Banner from '../../components/screen-components/profile/banner/Banner';
import Fixture from '../../components/screen-components/profile/fixture/Fixture';
import ProfileGallery from '../../components/screen-components/profile/gallery/ProfileGallery';
import Invitations from '../../components/screen-components/profile/invitations/Invitations';
import PersonalInfo from '../../components/screen-components/profile/personal-info/PersonalInfo';
import Results from '../../components/screen-components/profile/results/Results';
import Stats from '../../components/screen-components/profile/stats/Stats';

const PersonalWrapper = styled(RowWrapper)`
  justify-content: space-between;
  @media (max-width: 1054px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const tabs = [
  {
    title: 'Profile',
    children: (
      <>
        <PersonalWrapper>
          <PersonalInfo isMyProfile />
          <ProfileGallery isMyProfile />
        </PersonalWrapper>
      </>
    ),
  },
  // {
  //   title: 'Highlights',
  //   children: <Highlights isMyProfile />,
  // },
  {
    title: 'Fixtures',
    children: <Fixture />,
  },
  {
    title: 'Results',
    children: <Results isMyProfile />,
  },
  {
    title: 'Stats',
    children: <Stats isMyProfile />,
  },
  {
    title: 'Injuries',
    children: <Injuries isMyProfile />,
  },
  {
    title: 'Invitations',
    children: <Invitations />,
  },
];

const MyProfile = () => (
  <>
    <AppWrapper>
      <Menu />
      <Banner isMyProfile />
      <Tabs tabs={tabs} />
    </AppWrapper>
  </>
);

export default MyProfile;
