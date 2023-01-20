import React from 'react';
import cardIcon from '../../../../assets/icons/card.svg';
import cashIcon from '../../../../assets/icons/cash.svg';
import { PAYMENT_OPTIONS, PLAYER_COST } from '../../../../constants/club-data/RegisterClubData';
import DropdownWithIcon from '../../../common-components/dropdown/DropdownWithIcon';
import { Header } from '../steps/ClubCommonComponents';

const Payment = () => {
  return (
    <>
      <Header>Payment information</Header>
      <DropdownWithIcon data={PAYMENT_OPTIONS} icon={cardIcon} placeholder="Payment Option" />
      <DropdownWithIcon data={PLAYER_COST} icon={cashIcon} placeholder="Cost Per Player" />
    </>
  );
};

export default Payment;
