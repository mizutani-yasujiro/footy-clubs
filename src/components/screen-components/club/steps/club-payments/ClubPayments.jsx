import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import cardIcon from '../../../../../assets/icons/card.svg';
import cashIcon from '../../../../../assets/icons/cash.svg';
import Button from '../../../../common-components/buttons/button/Button';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import { Container, Header, BtnWrapper, MinWidthWrapper } from '../ClubCommonComponents';
import DropdownWithIcon from '../../../../common-components/dropdown/DropdownWithIcon';
import { PAYMENT_OPTIONS, PLAYER_COST } from '../../../../../constants/club-data/RegisterClubData';

const ClubPayments = ({ functions }) => {
  const { push } = useHistory();
  return (
    <>
      <Container>
        <Header>Payment information</Header>
        <MinWidthWrapper>
          <DropdownWithIcon data={PAYMENT_OPTIONS} icon={cardIcon} placeholder="Payment Option" />
          <DropdownWithIcon data={PLAYER_COST} icon={cashIcon} placeholder="Cost Per Player" />
        </MinWidthWrapper>
        <BtnWrapper>
          <ButtonText onClick={functions.handlePreviousStep}>Previous step</ButtonText>
          <Button onClick={() => push('/clubs/1/profile')}>Submit</Button>
        </BtnWrapper>
      </Container>
    </>
  );
};

ClubPayments.propTypes = {
  functions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ClubPayments;
