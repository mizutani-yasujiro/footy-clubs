import { useFormik } from 'formik';
import React from 'react';
import emailIcon from '../../../../../../assets/icons/e-mail.svg';
import userIcon from '../../../../../../assets/icons/user.svg';
import { GREY_TEXT_COLOR } from '../../../../../../constants/themeColors';
import Button from '../../../../../common-components/buttons/button/Button';
import InputWithIcon from '../../../../../common-components/input/InputWithIcon';
import Text14 from '../../../../../common-components/text/text-14/Text14';
import Text24 from '../../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { SpaceWrapper } from '../ClubInfo';

const Invitation = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    onSubmit: () => {},
  });
  return (
    <ColumnWrapper style={{ maxWidth: 550 }}>
      <SpaceWrapper>
        <Text14 style={{ color: GREY_TEXT_COLOR }}>Club unique code</Text14>
        <Text24 bold>WH3-QK2</Text24>
      </SpaceWrapper>
      <SpaceWrapper>
        <Text14 style={{ color: GREY_TEXT_COLOR }}>Invite player to the club</Text14>
        <Text14>
          Please enter email address of the player you would like to invite. If the player has a
          sitneName account, they will receive a notification, otherwise they will receive your
          invitation via the contact details provided below...
        </Text14>
      </SpaceWrapper>
      <SpaceWrapper>
        <Text14 style={{ color: GREY_TEXT_COLOR, marginBottom: 10 }}>Send invite</Text14>
        <InputWithIcon
          name="name"
          placeholder="Player Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          icon={userIcon}
        />
        <InputWithIcon
          name="email"
          placeholder="E-Mail Address"
          onChange={formik.handleChange}
          value={formik.values.email}
          icon={emailIcon}
        />
        <Button style={{ alignSelf: 'flex-end' }} onClick={formik.handleSubmit}>
          Send invite
        </Button>
      </SpaceWrapper>
    </ColumnWrapper>
  );
};

Invitation.propTypes = {};

export default Invitation;
