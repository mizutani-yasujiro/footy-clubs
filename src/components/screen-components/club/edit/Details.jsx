import React from 'react';
import genderIcon from '../../../../assets/icons/gender.svg';
import peopleIcon from '../../../../assets/icons/people.svg';
import { GENDER, TEAM_SIZE } from '../../../../constants/club-data/RegisterClubData';
import DropdownWithIcon from '../../../common-components/dropdown/DropdownWithIcon';
import Text12 from '../../../common-components/text/text-12/Text12';
import { Header } from '../steps/ClubCommonComponents';

const Details = () => {
  return (
    <>
      <Header>Game details</Header>
      <Text12 style={{ marginBottom: '20px' }}>The next fixture will be: 00:00 to 00:00</Text12>
      <DropdownWithIcon data={TEAM_SIZE} icon={genderIcon} placeholder="Team Size" />
      <DropdownWithIcon data={GENDER} icon={peopleIcon} placeholder="Gender" />
    </>
  );
};

export default Details;
