import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pinIcon from '../../../../../assets/icons/pin.svg';
import Button from '../../../../common-components/buttons/button/Button';
import InputWithIcon from '../../../../common-components/input/InputWithIcon';
import ButtonText from '../../../../common-components/buttons/button-text/ButtonText';
import Script from 'react-load-script';
import { Container, Header, InfoWrapper, GoogleMap, BtnWrapper } from '../ClubCommonComponents';

const ClubLocation = ({ functions }) => {
  const [location, setLocation] = useState('');

  let marker = null;

  /*global google*/
  const init = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const map = new google.maps.Map(document.getElementById('googleMap'), {
        center: { lat: pos.lat ? pos.lat : 0, lng: pos.lng ? pos.lng : 0 },
        zoom: 4,
      });

      const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('location'),
        {
          types: ['geocode'],
        },
      );

      const setMarker = (geometry) => {
        if (google !== undefined && google.maps !== undefined) {
          if (marker && marker.setMap) {
            marker.setMap(null);
          }
          marker = new google.maps.Marker({
            position: { lat: geometry.location.lat(), lng: geometry.location.lng() },
            map: map,
          });
          map.setCenter({
            lat: geometry.location.lat(),
            lng: geometry.location.lng(),
          });
          map.setZoom(10);
          marker.setMap(map);
        }
      };

      google.maps.event.addListener(autocomplete, 'place_changed', function () {
        const near_place = autocomplete.getPlace();
        if (near_place.geometry) setMarker(near_place.geometry);
      });
    });
  };

  return (
    <>
      <Script
        onLoad={init}
        url={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${process.env.REACT_APP_GOOGLE_MAP_API_URL}`}></Script>
      <Container>
        <Header>Club location</Header>
        <InfoWrapper>
          <InputWithIcon
            name="location"
            placeholder="Location"
            onChange={({ target: { value } }) => setLocation(value)}
            value={location}
            icon={pinIcon}
          />
        </InfoWrapper>
        <GoogleMap id="googleMap" />
        <BtnWrapper>
          <ButtonText onClick={functions.handlePreviousStep}>Previous step</ButtonText>
          <Button onClick={functions.handleNextStep}>Next step</Button>
        </BtnWrapper>
      </Container>
    </>
  );
};

ClubLocation.propTypes = {
  functions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default ClubLocation;
