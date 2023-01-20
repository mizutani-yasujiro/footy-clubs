import React from 'react';
import BorderContainer from '../../../../common-components/containers/border-container/BorderContainer';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text24 from '../../../../common-components/text/text-24/Text24';
import styled from 'styled-components';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Button from '../../../../common-components/buttons/button/Button';
import { useFormik } from 'formik';
import lockIcon from '../../../../../assets/icons/lock.svg';
import InputWithIcon from '../../../../common-components/input/InputWithIcon';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import { useHistory } from 'react-router-dom';

const Wrapper = styled(BorderContainer)`
  padding: 50px 100px;
  max-width: 600px;
  justify-content: center;
  @media (max-width: 1200px) {
    max-width: unset;
    margin: 20px;
  }
`;

const JoinClub = () => {
  const { push } = useHistory();
  const formik = useFormik({
    initialValues: {
      code: '',
    },
  });

  return (
    <Wrapper>
      <ColumnWrapper style={{ maxWidth: 300 }}>
        <Text24>Create or join a club</Text24>
        <Text14 style={{ margin: '10px 0 40px' }}>
          Want to join an existing Game? Enter the club{"'"}s unique code to send your request to
          join. Codes are provided by club owners.
        </Text14>
        <InputWithIcon
          name="code"
          placeholder="Paste the code"
          onChange={formik.handleChange}
          value={formik.values.code}
          icon={lockIcon}
        />
        <Button style={{ marginTop: 20 }}>Join a club</Button>
        <ButtonText onClick={() => push('/clubs/register-club')} style={{ alignSelf: 'center' }}>
          Create a club
        </ButtonText>
      </ColumnWrapper>
    </Wrapper>
  );
};

export default JoinClub;
