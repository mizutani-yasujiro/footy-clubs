import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text12 from '../../../../../common-components/text/text-12/Text12';
import styled from 'styled-components';
import RowWrapper from '../../../../../common-components/wrappers/row-wrapper/RowWrapper';
import Button from '../../../../../common-components/buttons/button/Button';

const UserContianer = styled(ColumnWrapper)`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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

const TeamStatus = ({ data, onSubmit }) => {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  useEffect(() => {
    const aTeam = [];
    const bTeam = [];
    for (let i = 0; i < 6; i++) {
      aTeam.push(data[i]);
    }
    for (let i = 6; i < 12; i++) {
      bTeam.push(data[i]);
    }

    setTeamA(aTeam);
    setTeamB(bTeam);
  }, [data]);

  return (
    <TeamStatusWrapper autoWidth>
      <RowWrapper autoWidth>
        <RightColum autoWidth>
          {teamA.map(({ name, img }, i) => (
            <UserContianer key={`item${i}`}>
              <UserImage src={img} alt={name} />
              <Text12>{name}</Text12>
            </UserContianer>
          ))}
        </RightColum>
        <LeftColum autoWidth>
          {teamB.map(({ name, img }, i) => (
            <UserContianer key={`item${i}`}>
              <UserImage src={img} alt={name} />
              <Text12>{name}</Text12>
            </UserContianer>
          ))}
        </LeftColum>
      </RowWrapper>
      <Button onClick={onSubmit}>Change team size</Button>
    </TeamStatusWrapper>
  );
};

TeamStatus.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TeamStatus;
