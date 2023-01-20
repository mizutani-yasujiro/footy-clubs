import React from 'react';
import Menu from '../../../components/common-components/menu/Menu';
import Tabs from '../../../components/common-components/tabs/Tabs';
import AppWrapper from '../../../components/common-components/wrappers/app-wrapper/AppWrapper';
import ProfileBackground from '../../../components/screen-components/club/profile/background/ProfileBackground';
import Banner from '../../../components/screen-components/club/profile/banner/Banner';
import ClubInfo from '../../../components/screen-components/club/profile/club-info/ClubInfo';
import Fixture from '../../../components/screen-components/club/profile/fixture/Fixture';
import Results from '../../../components/screen-components/club/profile/results/Results';
import Squad from '../../../components/screen-components/club/profile/squad/Squad';
import Stats from '../../../components/screen-components/club/profile/stats/Stats';

const tabs = [
  {
    title: 'club',
    children: <ClubInfo isMyProfile />,
  },
  // {
  //   title: 'highlights',
  //   children: <Highlights isMyProfile />,
  // },
  {
    title: 'fixtures',
    children: <Fixture />,
  },
  {
    title: 'results',
    children: <Results />,
    id: 'clubResults',
  },
  {
    title: 'squad',
    children: <Squad />,
  },
  {
    title: 'stats',
    children: <Stats />,
  },
];

const MyClub = () => {
  return (
    <>
      <ProfileBackground />
      <AppWrapper paddingTop="25px">
        <Menu />
        <Banner />
        <Tabs tabs={tabs} />
      </AppWrapper>
    </>
  );
};

export default MyClub;
