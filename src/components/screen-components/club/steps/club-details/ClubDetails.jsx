import React from 'react';
import PropTypes from 'prop-types';
import genderIcon from '../../../../../assets/icons/gender.svg';
import peopleIcon from '../../../../../assets/icons/people.svg';
import Button from '../../../../common-components/buttons/button/Button';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import { Container, Header, BtnWrapper, MinWidthWrapper } from '../ClubCommonComponents';
import DropdownWithIcon from '../../../../common-components/dropdown/DropdownWithIcon';
import Text12 from '../../../../common-components/text/text-12/Text12';
import { GENDER, TEAM_SIZE } from '../../../../../constants/club-data/RegisterClubData';

const ClubDetails = ({ functions }) => {
  return (
    <>
      <Container>
        <Header>Game details</Header>
        <MinWidthWrapper>
          <Text12 style={{ marginBottom: '20px' }}>The next fixture will be: 00:00 to 00:00</Text12>
          <DropdownWithIcon data={TEAM_SIZE} icon={genderIcon} placeholder="Team Size" />
          <DropdownWithIcon data={GENDER} icon={peopleIcon} placeholder="Gender" />
        </MinWidthWrapper>
        <BtnWrapper>
          <ButtonText onClick={functions.handlePreviousStep}>Previous step</ButtonText>
          <Button onClick={functions.handleNextStep}>Next step</Button>
        </BtnWrapper>
      </Container>
    </>
  );
};

ClubDetails.propTypes = {
  functions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ClubDetails;
