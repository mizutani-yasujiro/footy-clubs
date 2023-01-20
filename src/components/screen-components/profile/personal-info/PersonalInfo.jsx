import React, {useEffect} from 'react';
import styled from 'styled-components';
import ButtonEdit from '../../../common-components/buttons/button-edit/ButtonEdit';
import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import Text14 from '../../../common-components/text/text-14/Text14';
import Text18 from '../../../common-components/text/text-18/Text18';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';

import {connect} from 'react-redux';
import { userActions } from '../../../../redux/actions';
import { footMock, positionStringMock } from '../edit-form/mocks';

import userIcon from '../../../../assets/icons/user.svg';
import flagIcon from '../../../../assets/icons/empty-flag.svg';
import pinIcon from '../../../../assets/icons/pin.svg';
import footballerIcon from '../../../../assets/icons/footballer.svg';
import footIcon from '../../../../assets/icons/foot.svg';
import peopleIcon from '../../../../assets/icons/people.svg';
import ballIcon from '../../../../assets/icons/ball.svg';

import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import EditProfile from '../../../../screens/profile/EditProfile';
import { useState } from 'react';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  align-self: flex-start;
  margin-right: 20px;
  @media (max-width: 1054px) {
    margin: 25px 0;
    align-self: unset;
    min-width: unset;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
`;

const PersonalInfo = (props) => {
  const {isMyProfile} = props;
  
  useEffect(() => {
    props.fetchUser();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  let position_obj = props.profile == undefined ? null : positionStringMock.find((i) => i.key == props.profile.position)
  let position = (position_obj == null ? 'N/A' : position_obj.value)

  let foot_obj = props.profile == undefined ? null : footMock.find((i) => i.key == props.profile.best_foot)
  let foot = (foot_obj == null ? 'N/A' : foot_obj.value)

  let positions = props.profile == undefined || props.profile.playable_positions == undefined || props.profile.playable_positions == '' ? 'N/A' : props.profile.playable_positions && props.profile.playable_positions.toUpperCase()
  
  const list = [
    {
      src: userIcon,
      placeholder: 'Name',
      value: props.info == undefined ? 'N/A' : props.info.first_name + ' ' + props.info.last_name,
    },
    {
      src: flagIcon,
      placeholder: 'Nationality',
      value: props.profile == undefined || props.profile.nationality == undefined || props.profile.nationality == '' ? 'N/A' : props.profile.nationality,
    },
    {
      src: pinIcon,
      placeholder: 'Home Town',
      value: props.profile == undefined || props.profile.hometown == undefined || props.profile.hometown == '' ? 'N/A' : props.profile.hometown,
    },
    {
      src: footballerIcon,
      placeholder: 'Position',
      value: position,
    },
    {
      src: footIcon,
      placeholder: 'Preferred Foot',
      value: foot,
    },
    {
      src: peopleIcon,
      placeholder: 'I Play Like',
      value: props.profile == undefined || props.profile.play_like == undefined || props.profile.play_like == '' ? 'N/A' : props.profile.play_like,
    },
    {
      src: ballIcon,
      placeholder: 'Playable Positions',
      value: positions,
    },
  ];
  return (
    <Wrapper>
      <BorderContainer>
        <ColumnWrapper>
          <ColumnWrapper>
            {list
              ? list.map((item, index) => (
                  <RowWrapper style={{ marginBottom: '25px' }} key={item.placeholder}>
                    <ImgWrapper>
                      <img
                        style={{
                          margin: '5px 20px 0 0',
                          alignSelf: index === 0 ? 'flex-start' : 'center',
                        }}
                        src={item.src}
                        alt={item.placeholder}
                      />
                    </ImgWrapper>
                    <ColumnWrapper>
                      <Text14 style={{ marginTop: '0' }}>{item.placeholder}</Text14>
                      {index === 1 && item.value != 'N/A' ?
                        <ReactFlagsSelect
                          defaultCountry={props.profile && props.profile.nationality}
                          className="nationality-show-flags"
                          disabled={true}
                        />
                        :
                        <Text18>{item.value}</Text18>
                      }
                      {index === 0 ? (
                        <Text14>
                          {props.profile && props.profile.description}
                        </Text14>
                      ) : null}
                    </ColumnWrapper>
                  </RowWrapper>
                ))
              : null}
          </ColumnWrapper>
          {isMyProfile ? <ButtonEdit onClick={() => setIsModalOpen(true)} /> : null}
          <PureModal
            header="Edit your profile"
            width="80%"
            onClose={() => {
              setIsModalOpen(false)
            }}
            isOpen={isModalOpen}
          >
            <EditProfile setIsModalOpen={setIsModalOpen}/>
          </PureModal>
        </ColumnWrapper>
      </BorderContainer>
    </Wrapper>
  );
};

function mapDispatchToProps(dispatch){
  return {
    fetchUser:() => dispatch(userActions.fetchUser())
  };
}

function mapStateToProps(state){
  const {info, profile} = state.user
  return {
    info, profile
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
