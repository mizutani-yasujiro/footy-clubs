import React, { useState, useEffect } from 'react';

import {connect} from 'react-redux';
import { userActions } from '../../../../redux/actions';
import moment from "moment";

import BorderContainer from '../../../common-components/containers/border-container/BorderContainer';
import { useFormik } from 'formik';
import styled from 'styled-components';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';
import globeIcon from '../../../../assets/icons/globe.svg';
import pinIcon from '../../../../assets/icons/pin.svg';
import footballerIcon from '../../../../assets/icons/footballer.svg';
import footIcon from '../../../../assets/icons/foot.svg';
import peopleIcon from '../../../../assets/icons/people.svg';
import switchIcon from '../../../../assets/icons/switch.svg';
import personOneIcon from '../../../../assets/icons/person-one.svg';
import personTwoIcon from '../../../../assets/icons/person-two.svg';
import docIcon from '../../../../assets/icons/doc.svg';
import rulerIcon from '../../../../assets/icons/ruler.svg';
import weightIcon from '../../../../assets/icons/weight.svg';
import tShirtIcon from '../../../../assets/icons/t-shirt.svg';
import ballIcon from '../../../../assets/icons/ball.svg';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Text24 from '../../../common-components/text/text-24/Text24';
import Avatar from '../../shared/Avatar';
import ButtonText from '../../../common-components/buttons/button-text/ButtonText';
import InputWithIcon from '../../../common-components/input/InputWithIcon';
import FlagInput from '../../../common-components/input/FlagInput';
import TextAreaWithIcon from '../../../common-components/input/TextAreaWithIcon';
import DatePicker from '../../../common-components/date-picker/DatePicker';
import DropdownWithIcon from '../../../common-components/dropdown/DropdownWithIcon';
import Button from '../../../common-components/buttons/button/Button';
import UploadWrapper from '../../../common-components/upload-wrapper/UploadWrapper';
import { positionMock, footMock, statusMock, heightMock, weightMock, countryMock, leagueMock, teamMock } from './mocks';
import Selector from '../../../common-components/selector/Selector';
import ClubDropDowns from './ClubDropDowns';

import DefaultAvatar from '../../../../assets/avatar/default_avatar.png';

const Wrapper = styled(BorderContainer)`
  ${(props) => (props.left ? 'margin-left: 20px' : 'margin-right: 20px')};
  ${(props) => (props.column ? 'flex-direction: column' : 'flex-direction: row')};
  @media (max-width: 1168px) {
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const BigAvatar = styled(Avatar)`
  width: 160px;
  margin: 0;
  height: 160px;
`;

const ColumnDetail = styled(ColumnWrapper)`
  ${(props) => (props.left ? 'margin-left: 16px' : 'margin-right: 16px')};
  @media (max-width: 1168px) {
    margin: 0;
  }
`;

const EditFormWrapper = styled(RowWrapper)`
  @media (max-width: 1168px) {
    flex-wrap: wrap;
  }
`;

const EditForm = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  let playablePositions = positionMock
  if(props.profile != undefined && props.profile.playable_positions != undefined){
    let arr = props.profile.playable_positions.split(',')
    positionMock.map((position) => {
      if(arr.includes(position.key))
        position['selected'] = true
      return position
    })
  }

  const [selectedDate, setSelectedDate] = useState(props.profile && moment(props.profile.birthday).toDate());
  const [selectedWeight, setSelectedWeight] = useState(props.profile && weightMock.find((i)=>i.key==props.profile.weight));
  const [selectedHeight, setSelectedHeight] = useState(props.profile && heightMock.find((i)=>i.key==props.profile.height));
  const [selectedStatus, setSelectedStatus] = useState(props.profile && statusMock.find((i)=>i.key==props.profile.status));
  const [selectedPosition, setSelectedPosition] = useState(props.profile && positionMock.find((i)=>i.key==props.profile.position));
  const [selectedBestFoot, setSelectedBestFoot] = useState(props.profile && footMock.find((i)=>i.key==props.profile.best_foot));
  const [country, setCountry] = useState(props.profile && countryMock.find((i)=>i.key==props.profile.country));
  const [league, setLeague] = useState(props.profile && leagueMock.find((i)=>i.key==props.profile.league));
  const [team, setTeam] = useState(props.profile && teamMock.find((i)=>i.key==props.profile.team));
  const [selectedPlayablePositions, setSelectedPlayablePositions] = useState(playablePositions);
  const [profileImage, setProfileImage] = useState(props.profile == undefined || props.profile.avatar == undefined || props.profile.avatar == '' ? null : props.profile.avatar);
  const [selectedNationality, setSelectedNationality] = useState(props.profile && props.profile.nationality);

  const changeProfileImage = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImage(reader.result)
    };
    return reader.result;
  }

  const formik = useFormik({
    initialValues: {
      description: props.profile && props.profile.description,
      first_name: props.info ? props.info.first_name : '',
      team: '',
      playLike: props.profile && props.profile.play_like,
      number: props.profile && props.profile.favourite_number,
      nationality: props.profile && props.profile.nationality,
      hometown: props.profile && props.profile.hometown,
      position: '',
      preferredFoot: '',
      placeholder: '',
      last_name: props.info ? props.info.last_name : '',
    },
    onSubmit: () => {
      formik.handleReset();
    },
  });

  const submit = () => {
    let positions_key = []
    selectedPlayablePositions.map((i) => {
      if(i.selected == true)
        positions_key.push(i.key)
    })

    let userprofile = {
      "avatar": profileImage == null ? undefined : profileImage,
      "first_name": formik.values.first_name,
      "last_name": formik.values.last_name,
      "description": formik.values.description,
      "nationality": selectedNationality && selectedNationality,
      "hometown": formik.values.hometown,
      "country": country && country.key,
      "league": league && league.key,
      "team": team && team.key,
      "birthday": selectedDate && moment(selectedDate.toDateString()).format('YYYY-MM-DD'),
      "weight": selectedWeight && selectedWeight.key,
      "height": selectedHeight && selectedHeight.key,
      "status": selectedStatus && selectedStatus.key,
      "favourite_number": formik.values.number,
      "position": selectedPosition && selectedPosition.key,
      "best_foot": selectedBestFoot && selectedBestFoot.key,
      "play_like": formik.values.playLike,
      "playable_positions": positions_key.toString()
    }
    
    props.updateProfile(userprofile);
    props.setIsModalOpen(false)
  }

  const onSelectWeight = (item) => {
    setSelectedWeight(item)
  }
  const onSelectHeight = (item) => {
    setSelectedHeight(item)
  }
  const onSelectStatus = (item) => {
    setSelectedStatus(item)
  }
  const onSelectPosition = (item) => {
    setSelectedPosition(item)
  }
  const onSelectBestFoot = (item) => {
    setSelectedBestFoot(item)
  }
  
  return (
    <ColumnWrapper>
      <EditFormWrapper>
        <Wrapper>
          <ColumnWrapper>
            <Text24 style={{ marginBottom: 20 }}>Edit profile</Text24>
            <ColumnWrapper
              autoWidth
              style={{ alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
              <BigAvatar alt="profile-img" src={profileImage === null ? DefaultAvatar : profileImage} />
              <UploadWrapper
                onDrop={(f) => {
                  changeProfileImage(f[0]);
                }}>
                <ButtonText style={{ marginTop: 10 }}>Upload profile image</ButtonText>
              </UploadWrapper>
            </ColumnWrapper>
          </ColumnWrapper>
          <ColumnWrapper>
            <InputWithIcon
              name="first_name"
              placeholder="Firstname"
              onChange={formik.handleChange}
              value={formik.values.first_name}
              icon={personOneIcon}
            />
            <InputWithIcon
              name="last_name"
              placeholder="Lastname"
              onChange={formik.handleChange}
              value={formik.values.last_name}
              icon={personTwoIcon}
            />
            <TextAreaWithIcon
              name="description"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
              icon={docIcon}
            />
            <FlagInput 
              name="nationality"
              placeholder="Nationality"
              onChange={setSelectedNationality}
              value={selectedNationality}
              icon={globeIcon}
            />
            
            {/* <InputWithIcon
              name="nationality"
              placeholder="Nationality"
              onChange={formik.handleChange}
              value={formik.values.nationality}
              icon={globeIcon}
            /> */}
            <InputWithIcon
              name="hometown"
              placeholder="Home Town"
              onChange={formik.handleChange}
              value={formik.values.hometown}
              icon={pinIcon}
            />
          </ColumnWrapper>
        </Wrapper>
        <Wrapper column left>
          <RowWrapper>
            <Text24 style={{ marginBottom: 20 }}>Details</Text24>
          </RowWrapper>
          <EditFormWrapper>
            <ColumnDetail>
              <DatePicker
                value={selectedDate}
                onChange={(d) => setSelectedDate(d)}
                placeholder="Age"
              />
              <DropdownWithIcon data={weightMock} placeholder="Weight" icon={weightIcon} selectedItem={selectedWeight} onSelect={(selectedWeight) => onSelectWeight(selectedWeight)} />
              <DropdownWithIcon data={heightMock} placeholder="Height" icon={rulerIcon} selectedItem={selectedHeight} onSelect={(selectedHeight) => onSelectHeight(selectedHeight)}/>
              <DropdownWithIcon data={statusMock} placeholder="Status" icon={switchIcon} selectedItem={selectedStatus} onSelect={(selectedStatus) => onSelectStatus(selectedStatus)}/>
              <ClubDropDowns country={country} league={league} team={team} setCountry={setCountry} setLeague={setLeague} setTeam={setTeam}/>
              <InputWithIcon
                name="number"
                onChange={formik.handleChange}
                value={formik.values.number}
                placeholder="Favourite Number"
                icon={tShirtIcon}
              />
            </ColumnDetail>
            <ColumnDetail left>
              <DropdownWithIcon data={positionMock} placeholder="Position" icon={footballerIcon} selectedItem={selectedPosition} onSelect={(selectedPosition) => onSelectPosition(selectedPosition)}/>
              <DropdownWithIcon data={footMock} placeholder="Best Foot" icon={footIcon} selectedItem={selectedBestFoot} onSelect={(selectedBestFoot) => onSelectBestFoot(selectedBestFoot)}/>
              <InputWithIcon
                name="playLike"
                onChange={formik.handleChange}
                value={formik.values.playLike}
                placeholder="Who Do You Play Like"
                icon={peopleIcon}
              />
              <Selector data={positionMock} icon={ballIcon} placeholder="Playable positions" selectedPlayablePositions = {selectedPlayablePositions} setSelectedPlayablePositions={setSelectedPlayablePositions}/>
            </ColumnDetail>
          </EditFormWrapper>
        </Wrapper>
      </EditFormWrapper>
      <Button style={{ alignSelf: 'flex-end', margin: '20px 0' }} onClick={submit}>Save</Button>
    </ColumnWrapper>
  );
};

function mapDispatchToProps(dispatch){
  return {
      updateProfile:(profile)=> dispatch(userActions.updateProfile(profile)),
      fetchUser:() => dispatch(userActions.fetchUser())
  };
}

function mapStateToProps(state){
  const {info, profile} = state.user
  return {
    info, profile
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
