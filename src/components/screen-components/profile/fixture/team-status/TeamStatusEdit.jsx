import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { APP_BACKGROUND_COLOR } from '../../../../../constants/themeColors';
import usersMock from '../../../../../mocks/usersMock';
import Button from '../../../../common-components/buttons/button/Button';
import Text12 from '../../../../common-components/text/text-12/Text12';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';

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
  cursor: ${(props) => (props.noEdit ? 'auto' : 'pointer')};
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
    transform: rotate(5deg) scale(0.9);
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

const user = usersMock[0];

const aTeam = [];
const bTeam = [];
for (let i = 0; i < 6; i++) {
  aTeam.push({ id: i.toString() });
  bTeam.push({ id: i.toString() });
}

const TeamStatusEdit = ({ onSubmit, noEdit }) => {
  const [teamA, setTeamA] = useState(aTeam);
  const [teamB, setTeamB] = useState(bTeam);

  const pickPlayer = (t, id) => {
    if (t === 'A') {
      const aTeam = teamA.map((item) => {
        if (item.id === id) return { ...item, img: user.img, name: user.name };
        return { ...item, img: null, name: null };
      });
      setTeamA(aTeam);
      setTeamB(bTeam);
    } else {
      const bTeam = teamB.map((item) => {
        if (item.id === id) return { ...item, img: user.img, name: user.name };
        return { ...item, img: null, name: null };
      });
      setTeamB(bTeam);
      setTeamA(aTeam);
    }
  };

  return (
    <TeamStatusWrapper autoWidth>
      <RowWrapper autoWidth>
        <RightColum autoWidth>
          {teamA.map((item, i) => (
            <UserContianer
              onClick={noEdit ? null : () => pickPlayer('A', item.id)}
              key={`item${i}`}>
              {item.img ? (
                <UserImage noEdit={noEdit} src={item.img} alt="player" />
              ) : (
                <UserCircle noEdit={noEdit} />
              )}
              <Text12>{item.name ? item.name : 'Open space'}</Text12>
            </UserContianer>
          ))}
        </RightColum>
        <LeftColum autoWidth>
          {teamB.map((item, i) => (
            <UserContianer
              onClick={noEdit ? null : () => pickPlayer('B', item.id)}
              key={`item${i}`}>
              {item.img ? (
                <UserImage noEdit={noEdit} src={item.img} alt="player" />
              ) : (
                <UserCircle noEdit={noEdit} />
              )}
              <Text12>{item.name ? item.name : 'Open space'}</Text12>
            </UserContianer>
          ))}
        </LeftColum>
      </RowWrapper>
      {noEdit ? null : <Button onClick={onSubmit}>Please Confirm Availability</Button>}
    </TeamStatusWrapper>
  );
};

TeamStatusEdit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  noEdit: PropTypes.bool,
};

TeamStatusEdit.defaultProps = {
  noEdit: false,
};

export default TeamStatusEdit;
