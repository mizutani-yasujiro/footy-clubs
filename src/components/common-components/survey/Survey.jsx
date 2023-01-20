import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VotingSurvey from './VotingSurvey';

const VOTING = 'VOTING_SURVEY';
const OTHER = 'OTHER_SURVEY';

const Survey = (props) => {
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const voting = useSelector((state) => state.voting);

  useEffect(() => {
    if (voting?.isVoting) setSelectedSurvey(VOTING);
  }, [voting]);

  return (
    <>
      {selectedSurvey === VOTING ? (
        <VotingSurvey closePopup={() => setSelectedSurvey(null)} />
      ) : null}
      {selectedSurvey === OTHER ? <p>Other survey</p> : null}
    </>
  );
};

Survey.propTypes = {};

export default Survey;
