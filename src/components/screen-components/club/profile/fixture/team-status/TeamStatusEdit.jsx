import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text12 from '../../../../../common-components/text/text-12/Text12';
import styled from 'styled-components';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Button from '../../../../../common-components/buttons/button/Button';
import Input from '../../../../../common-components/input/Input';
import Modal from '../line-up/modal/Modal';
import ButtonText from '../../../../../common-components/buttons/button-text/ButtonText';
import { APP_BACKGROUND_COLOR } from '../../../../../../constants/themeColors';

const UserContianer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const UserCircle = styled.div`
  width: 50px;
  border-radius: 60%;
  background: ${APP_BACKGROUND_COLOR};
  height: 50px;
  margin-bottom: 5px;
  transition: 0.2s ease-in-out all;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
    opacity: 0.7;
  }
`;

const UserImage = styled.img`
  width: 50px;
  border-radius: 60%;
  height: 50px;
  object-fit: cover;
  margin-bottom: 5px;
  transition: 0.2s ease-in-out all;
  &:hover {
    transform: rotate(65deg) scale(0.9);
    opacity: 0.7;
  }
`;

const RightColum = styled(ColumnWrapper)`
  margin-right: 30px;
`;

const LeftColum = styled(ColumnWrapper)`
  margin-left: 30px;
`;

const TeamStatusWrapper = styled(ColumnWrapper)`
  align-items: center;
`;

const TeamStatusEdit = ({ onSubmit }) => {
  const [teamSize, setTeamSize] = useState(6);
  const [selectedId, setSelectedId] = useState(false);
  const [chosenTeam, setChosenTeam] = useState(null);
  const [modalHidden, setModalHidden] = useState(true);
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  const changeSize = () => {
    const aTeam = [];
    const bTeam = [];
    for (let i = 0; i < teamSize; i++) {
      aTeam.push({ id: i.toString() });
      bTeam.push({ id: i.toString() });
    }
    setTeamA(aTeam);
    setTeamB(bTeam);
  };

  useEffect(() => {
    changeSize();
    // eslint-disable-next-line
  }, []);

  const selectPlayer = (c, id) => {
    setChosenTeam(c);
    setSelectedId(id);
    setModalHidden(false);
  };

  const pickPlayer = (u, id) => {
    if (chosenTeam === 'A') {
      const aTeam = teamA.map((item) => {
        if (item.id === id) return { ...item, img: u.img, name: u.name };
        return item;
      });
      setTeamA(aTeam);
    } else {
      const bTeam = teamB.map((item) => {
        if (item.id === id) return { ...item, img: u.img, name: u.name };
        return item;
      });
      setTeamB(bTeam);
    }
    setModalHidden(true);
  };

  return (
    <TeamStatusWrapper autoWidth>
      {!modalHidden ? <Modal id={selectedId} onSelect={(u, id) => pickPlayer(u, id)} /> : null}
      <RowWrapper style={{ justifyContent: 'center', marginBottom: 40 }}>
        <Input
          type="number"
          placeholder="Team size"
          onChange={(e) => setTeamSize(e.target.value)}
          value={teamSize}
          style={{ maxWidth: 120 }}
        />
        <ButtonText onClick={changeSize} style={{ marginLeft: 20 }}>
          Save
        </ButtonText>
      </RowWrapper>
      <RowWrapper autoWidth>
        <RightColum autoWidth>
          {teamA.map((item, i) => (
            <UserContianer onClick={() => selectPlayer('A', item.id)} key={`item${i}`}>
              {item.img ? <UserImage src={item.img} alt="player" /> : <UserCircle />}
              <Text12>{item.name ? item.name : 'Pick a player'}</Text12>
            </UserContianer>
          ))}
        </RightColum>
        <LeftColum autoWidth>
          {teamB.map((item, i) => (
            <UserContianer onClick={() => selectPlayer('B', item.id)} key={`item${i}`}>
              {item.img ? <UserImage src={item.img} alt="player" /> : <UserCircle />}
              <Text12>{item.name ? item.name : 'Pick a player'}</Text12>
            </UserContianer>
          ))}
        </LeftColum>
      </RowWrapper>
      <Button onClick={onSubmit}>Confirm Availability</Button>
    </TeamStatusWrapper>
  );
};

TeamStatusEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TeamStatusEdit;
