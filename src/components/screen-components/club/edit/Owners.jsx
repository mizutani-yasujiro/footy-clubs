import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import commentIcon from '../../../../assets/icons/comment.svg';
import labelIcon from '../../../../assets/icons/label.svg';
import userAddIcon from '../../../../assets/icons/user-add.svg';
import ButtonText from '../../../common-components/buttons/button-text/ButtonText';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import TextAreaWithIcon from '../../../common-components/input/TextAreaWithIcon';
import Text12 from '../../../common-components/text/text-12/Text12';
import Text14 from '../../../common-components/text/text-14/Text14';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import { Header, OwnerItem } from '../steps/ClubCommonComponents';
const Owners = (props) => {
  const addOwner = () => {
    setOwnerList([...ownerList, owner]);
    ownerRef.current.clear();
  };

  const [owner, setOwner] = useState('');
  const [ownerList, setOwnerList] = useState(['Mark J Whittaker']);
  const ownerRef = useRef();

  const formik = useFormik({
    initialValues: {
      description: '',
      name: '',
    },
    onSubmit: () => {
      formik.handleReset();
    },
  });

  return (
    <>
      <Header>Club information</Header>
      <InputWithIcon
        name="name"
        placeholder="Club Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        icon={labelIcon}
      />
      <TextAreaWithIcon
        name="description"
        placeholder="Description"
        onChange={formik.handleChange}
        value={formik.values.description}
        icon={commentIcon}
      />
      <div style={{ marginBottom: 30 }}></div>
      <Header>Club Owner/manager(s)</Header>
      <ColumnWrapper onSubmit={formik.handleSubmit}>
        <InputWithIcon
          ref={ownerRef}
          name="addOwner"
          placeholder="Add Owner"
          onChange={({ target: { value } }) => setOwner(value)}
          value={owner}
          icon={userAddIcon}
        />
        <ButtonText
          onClick={addOwner}
          disabled={!owner}
          style={{ marginBottom: '20px', padding: 0, alignSelf: 'flex-end' }}>
          Add Owner
        </ButtonText>
        <ColumnWrapper>
          <Text14 style={{ color: '#DEDEDE', marginBottom: 8 }}>Club Owner(s)</Text14>
          {ownerList.map((item, i) => (
            <OwnerItem key={`${i}{item}`} normal={i % 2 === 0}>
              <Text12>{item}</Text12>
            </OwnerItem>
          ))}
        </ColumnWrapper>
      </ColumnWrapper>
    </>
  );
};

Owners.propTypes = {};

export default Owners;
