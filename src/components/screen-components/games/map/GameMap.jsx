import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Script from 'react-load-script';
import { GoogleMap } from '../../club/steps/ClubCommonComponents';
import ColumnWrapper from '../../../common-components/wrappers/column-wrapper/ColumnWrapper';
import Switch from '../../../common-components/buttons/switch-button/Switch';
import RowWrapper from '../../../common-components/wrappers/row-wrapper/RowWrapper';

const GameMap = ({ location }) => {
  const [isVisible, setIsVisble] = useState(true);
  const [gMap, setGMap] = useState(null);
  const [gMarker, setGMarker] = useState(null);
  const [geocoder, setGeocoder] = useState(null);

  /*global google*/
  const init = () => {
    const coder = new google.maps.Geocoder();
    setGeocoder(coder);
    navigator.geolocation.getCurrentPosition(function (position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const map = new google.maps.Map(document.getElementById('googleMap'), {
        center: { lat: pos.lat ? pos.lat : 0, lng: pos.lng ? pos.lng : 0 },
        zoom: 4,
      });
      setGMap(map);
    });
  };

  const setMarker = (geometry) => {
    if (google !== undefined && google.maps !== undefined) {
      const m = new google.maps.Marker({
        position: { lat: geometry.location.lat(), lng: geometry.location.lng() },
        map: gMap,
      });
      gMap.setCenter({
        lat: geometry.location.lat(),
        lng: geometry.location.lng(),
      });
      gMap.setZoom(10);
      m.setMap(gMap);
      setGMarker(m);
    }
  };

  useEffect(() => {
    if (location && geocoder) {
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === 'OK') {
          if (gMarker) {
            gMarker.setMap(null);
          }
          setMarker(results[0].geometry);
        } else {
          alert(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <ColumnWrapper>
      <RowWrapper style={{ marginBottom: 50, justifyContent: 'flex-end' }}>
        <Switch text="Show Map" isOn={isVisible} onChange={() => setIsVisble(!isVisible)} />
      </RowWrapper>
      <Script
        onLoad={init}
        url={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=${process.env.REACT_APP_GOOGLE_MAP_API_URL}`}></Script>
      <div style={{ opacity: isVisible ? '1' : '0', transition: '.2s ease-in-out all' }}>
        <GoogleMap id="googleMap" />
      </div>
    </ColumnWrapper>
  );
};

GameMap.propTypes = {
  location: PropTypes.string,
};

GameMap.defaultProps = {
  location: '',
};

export default GameMap;
