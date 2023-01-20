import React from 'react';
import Button from '../../../components/common-components/buttons/button/Button';
import Menu from '../../../components/common-components/menu/Menu';
import Text14 from '../../../components/common-components/text/text-14/Text14';
import Text24 from '../../../components/common-components/text/text-24/Text24';
import AppWrapper from '../../../components/common-components/wrappers/app-wrapper/AppWrapper';
import ColumnWrapper from '../../../components/common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../components/common-components/wrappers/row-wrapper/RowWrapper';
import ClubPromptForm from '../../../components/screen-components/club/prompt/ClubPromptForm';
import ProfileImage from '../../../components/screen-components/shared/banner/ProfileImage';
import { GREY_TEXT_COLOR } from '../../../constants/themeColors';

const ClubPrompt = () => {
  return (
    <AppWrapper>
      <Menu />
      <RowWrapper style={{ marginBottom: 50 }}>
        <ProfileImage
          src="https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80"
          alt="club-image"
        />
        <ColumnWrapper style={{ maxWidth: 500, marginTop: 50 }}>
          <Text24 bold>Tuesday Night FC</Text24>
          <Text14 style={{ color: GREY_TEXT_COLOR }}>Club description</Text14>
          <Text14>
            We are a group of friends who play football every week for fun … The standard is high
            and we look forward to playing every week … On the pitch we are not friends - we are
            enemies.
          </Text14>
          <Button style={{ alignSelf: 'flex-end' }}>Join Us</Button>
        </ColumnWrapper>
      </RowWrapper>
      <ClubPromptForm />
    </AppWrapper>
  );
};

export default ClubPrompt;
