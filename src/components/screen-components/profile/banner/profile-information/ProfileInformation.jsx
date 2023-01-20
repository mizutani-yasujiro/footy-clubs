import React, {useEffect} from 'react';

import england from '../../../../../assets/icons/england.svg';
import france from '../../../../../assets/icons/france.svg';
import germany from '../../../../../assets/icons/germany.svg';
import netherlands from '../../../../../assets/icons/netherlands.svg';
import italy from '../../../../../assets/icons/italy.svg';
import spain from '../../../../../assets/icons/italy.svg';
import scotland from '../../../../../assets/icons/italy.svg';

import teamLogo from '../../../../../assets/team-logo/manu.png';
import { MAIN_THEME_COLOR } from '../../../../../constants/themeColors';
import Text14 from '../../../../common-components/text/text-14/Text14';
import Text16 from '../../../../common-components/text/text-16/Text16';
import Text24 from '../../../../common-components/text/text-24/Text24';
import ColumnWrapper from '../../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import RowWrapper from '../../../../common-components/wrappers/row-wrapper/RowWrapper';
import { NameCol, ShortInfoCol, ShortInfoRow } from '../../../shared/banner/Informations';

import {connect} from 'react-redux';
import { userActions } from '../../../../../redux/actions';
import { weightMock, heightMock, statusMock, countryMock, teamLogoMock } from '../../edit-form/mocks';

const ProfileInformation = (props) => {
  const {isMyProfile} = props;
  
  useEffect(() => {
    props.fetchUser();
  }, []);

  let weight_obj = props.profile == undefined ? null : weightMock.find((i) => i.key == props.profile.weight)
  let weight = (weight_obj == null ? 'N/A' : weight_obj.value)

  let height_obj = props.profile == undefined ? null : heightMock.find((i) => i.key == props.profile.height)
  let height = (height_obj == null ? 'N/A' : height_obj.value)

  let status_obj = props.profile == undefined ? null : statusMock.find((i) => i.key == props.profile.status)
  let status = (status_obj == null ? 'N/A' : status_obj.value)

  let country_obj = props.profile == undefined ? null : countryMock.find((i) => i.key == props.profile.country)
  let country = (country_obj == null ? 'N/A' : country_obj.value)

  let team_obj = props.profile == undefined ? null : teamLogoMock.find((i) => i.key == props.profile.team)
  let team = (team_obj == null ? 'N/A' : team_obj.value)

  const getAge = (DOB) => {
    let today = new Date();
    let birthDate = new Date(DOB);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
  }

  let age = props.profile == undefined || props.profile.birthday == undefined ? 'N/A' : getAge(props.profile.birthday)

  const renderSwitchCountryFlag = (countryName) => {
    let component = null;
    switch(countryName) {
      case 'England':
        component = <img style={{ marginRight: '10px', height: '40px' }} src={england} alt="anchor" />
        break;
      case 'Germany':
        component = <img style={{ marginRight: '10px', height: '40px' }} src={germany} alt="anchor" />
        break;
      case 'Scotland':
        component = <img style={{ marginRight: '10px', height: '40px' }} src={scotland} alt="anchor" />
        break;
      case 'Spain':
        component = <img style={{ marginRight: '10px', height: '40px' }} src={spain} alt="anchor" />
        break;
      case 'France':
        component = <img style={{ marginRight: '10px', height: '40px' }} src={france} alt="anchor" />
        break;
      case 'Italy':
        component = <img style={{ marginRight: '10px', height: '40px' }} src={italy} alt="anchor" />
        break;
      case 'Netherlands':
        component = <img style={{ marginRight: '10px', height: '40px' }} src={netherlands} alt="anchor" />
        break;
      default:
        component = <img style={{ marginRight: '10px', height: '40px' }} src={netherlands} alt="anchor" />
        break;
    }
    return component;
  }
  
  return (
    <>
      <RowWrapper style={{ width: 'auto', alignSelf: 'center' }}>
        <ColumnWrapper>
          <NameCol>
            {!isMyProfile ? (
              <Text14 style={{ color: MAIN_THEME_COLOR, cursor: 'pointer' }}>Follow</Text14>
            ) : null}
            <Text24>{props.info && props.info.first_name + ' ' + props.info.last_name}</Text24>
            <RowWrapper className="nationality-wrapper" style={{ alignItems: 'center' }}>
              {
                country != 'N/A' &&
                renderSwitchCountryFlag(country)
              }
              <Text14>{country}</Text14>
            </RowWrapper>
          </NameCol>
          <ShortInfoRow>
            <ShortInfoCol>
              <Text14>Age</Text14>
              <Text16 bold style={{ margin: '2px 0 0' }}>
                {age}
              </Text16>
            </ShortInfoCol>
            <ShortInfoCol>
              <Text14>Weight</Text14>
              <Text16 bold style={{ margin: '2px 0 0' }}>
                {weight}
              </Text16>
            </ShortInfoCol>
            <ShortInfoCol>
              <Text14>Height</Text14>
              <Text16 bold style={{ margin: '2px 0 0' }}>
                {height}
              </Text16>
            </ShortInfoCol>
            <ShortInfoCol>
              <Text14>Status</Text14>
              <Text16 bold style={{ margin: '2px 0 0', color: MAIN_THEME_COLOR }}>
                {status}
              </Text16>
            </ShortInfoCol>
            <ColumnWrapper style={{ alignItems: 'center' }}>
              <Text14>Teams</Text14>
              <div style={{ width: 22, height: 22 }}>
                {team}
              </div>
            </ColumnWrapper>
          </ShortInfoRow>
        </ColumnWrapper>
      </RowWrapper>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInformation);
