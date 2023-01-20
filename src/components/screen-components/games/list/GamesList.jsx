import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../../../assets/icons/search.svg';
import { ACCENT_THEME_COLOR, APP_BACKGROUND_COLOR } from '../../../../constants/themeColors';
import Button from '../../../common-components/buttons/button/Button';
import DatePicker from '../../../common-components/date-picker/DatePicker';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import Text14 from '../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';

const GameWrapper = styled(ColumnWrapper)`
  margin-right: 50px;
  @media (max-width: 940px) {
    margin: 0 0 50px;
  }
`;

const DateText = styled(Text14)`
  color: ${(props) => (props.isSelected ? ACCENT_THEME_COLOR : '#404040')};
  cursor: pointer;
  margin-right: 40px;
`;

const AlignedRowWrapper = styled(RowWrapper)`
  align-items: center;
  justify-content: space-between;
`;

const GameItem = styled(RowWrapper)`
  background: ${(props) => (props.isEven ? APP_BACKGROUND_COLOR : '#F3F3F3')};
  padding: 10px 20px;
  margin: 5px 0 20px;
  justify-content: space-between;
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  border: 2px solid ${(props) => (props.isSelected ? ACCENT_THEME_COLOR : 'transparent')};
`;

const GameItemText = styled(Text14)`
  color: black;
  margin: 0 10px;
`;

const gamesMock = [
  {
    price: '$3',
    city: 'Balham',
    startTime: '8.00 pm',
    spaces: '52',
    clubName: 'Monday Night Football',
    date: '14/06/2020',
    id: 1,
  },
  {
    price: '$5',
    city: 'Clapham',
    startTime: '7.30 pm',
    spaces: '4',
    clubName: 'Goon Ballers FC',
    date: '15/06/2020',
    id: 2,
  },
  {
    price: '$7',
    city: 'Stratford',
    startTime: '7.00 pm',
    spaces: '13',
    clubName: 'Boys Footy',
    date: '16/06/2020',
    id: 3,
  },
];

const GamesList = ({ onSelect }) => {
  const [list, setList] = useState(gamesMock);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [search, setSearch] = useState('');

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    onSelect(game.city);
  };

  const filterList = (v) => {
    if (!v) setList(gamesMock);
    else {
      const filteredList = gamesMock.filter((item) => {
        return (
          item.city.toLowerCase().includes(v.toLowerCase()) ||
          item.clubName.toLowerCase().includes(v.toLowerCase())
        );
      });
      setList(filteredList);
    }
  };

  const handleSearch = (v) => {
    setSearch(v);
    filterList(v);
  };

  const filterListByDate = (d) => {
    if (!d) {
      setList(gamesMock);
    }
    const date = moment(d).format('DD/MM/YYYY');
    const filteredList = gamesMock.filter((item) =>
      item.date.toLowerCase().includes(date.toLowerCase()),
    );
    setList(filteredList);
    setSelectedDate(date);
  };

  const handleToday = () => {
    setSelectedTime('today');
    filterListByDate(new Date());
  };

  const handleTomorrow = () => {
    setSelectedTime('tomorrow');
    filterListByDate(moment().add(1, 'days'));
  };

  const handleReset = () => {
    setSearch('');
    setSelectedTime('');
    setSelectedDate('');
    setSelectedGame('');
    setList(gamesMock);
  };

  return (
    <GameWrapper>
      <RowWrapper style={{ marginBottom: 50 }}>
        <DateText bold isSelected={selectedTime === 'today'} onClick={handleToday}>
          Today
        </DateText>
        <DateText bold isSelected={selectedTime === 'tomorrow'} onClick={handleTomorrow}>
          Tomorrow
        </DateText>
        <RowWrapper style={{ justifyContent: 'flex-end' }}>
          <DatePicker
            value={selectedDate}
            onChange={(d) => filterListByDate(d)}
            placeholder="Select Date"
          />
        </RowWrapper>
      </RowWrapper>
      <InputWithIcon
        name="search"
        placeholder="Search"
        onChange={({ target: { value } }) => handleSearch(value)}
        value={search}
        icon={searchIcon}
      />
      <Button onClick={handleReset} style={{ margin: '10px 0 50px', alignSelf: 'flex-end' }}>
        Reset
      </Button>
      {list.map((game, i) => (
        <ColumnWrapper key={i}>
          <AlignedRowWrapper>
            <Text14 bold>{game.clubName}</Text14>
            <Text14>{game.date}</Text14>
          </AlignedRowWrapper>
          <GameItem
            isSelected={selectedGame && selectedGame.id === game.id}
            onClick={() => handleGameSelect(game)}
            isEven={i % 2 === 0}>
            <GameItemText>{game.price}</GameItemText>
            <GameItemText>{game.city}</GameItemText>
            <GameItemText>starts at {game.startTime}</GameItemText>
            <GameItemText>{game.spaces} spaces left</GameItemText>
          </GameItem>
        </ColumnWrapper>
      ))}
    </GameWrapper>
  );
};

GamesList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default GamesList;
