import React, { useState } from 'react';
import usersIcon from '../../../../assets/icons/users.svg';
import DropdownWithIcon from '../../../common-components/dropdown/DropdownWithIcon';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { countryMock, leagueMock, teamMock } from './mocks';

const ClubDropDowns = (props) => {
  const [teamList, setTeamList] = useState([]);
  const [leagueList, setLeagueList] = useState([]);
  // eslint-disable-next-line

  const handleCountrySelect = (i) => {
    props.setCountry(null);
    props.setLeague(null);
    const leagueNewList = leagueMock.filter((l) => l.country === i.key);
    setLeagueList(leagueNewList);
    props.setCountry(i);
  };

  const handleLeagueSelect = (i) => {
    props.setLeague(null);
    const teamNewList = teamMock.filter((l) => l.league === i.key);
    setTeamList(teamNewList);
    props.setLeague(i);
  };

  return (
    <ColumnWrapper>
      <DropdownWithIcon
        onSelect={(i) => handleCountrySelect(i)}
        data={countryMock}
        selectedItem={props.country}
        placeholder="Favourite Team Country"
        icon={usersIcon}
      />
      {props.country ? (
        <DropdownWithIcon
          onSelect={(i) => handleLeagueSelect(i)}
          data={leagueList}
          selectedItem={props.league}
          placeholder="Favourite Team League"
          icon={usersIcon}
        />
      ) : null}
      {props.league ? (
        <DropdownWithIcon
          onSelect={(i) => props.setTeam(i)}
          data={teamList}
          selectedItem={props.team}
          placeholder="Favourite Team"
          icon={usersIcon}
        />
      ) : null}
    </ColumnWrapper>
  );
};

export default ClubDropDowns;
