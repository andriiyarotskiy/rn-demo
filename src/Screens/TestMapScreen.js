import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, {LatLng, Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import decode from '@mapbox/polyline';

const mapStyle = require('../Screens/styles/MapStyle.json');

const CustomMarker = () => (
  <View
    style={{
      width: 12,
      height: 12,
      backgroundColor: '#93CD4B',
      borderRadius: 12,
      elevation: 10,
    }}>
    {/*<Text style={{color: '#000'}}>Berlin</Text>*/}
  </View>
);

const getDirections = async (startLoc, destinationLoc) => {
  try {
    const KEY = 'AIzaSyCA8MPSQeSbWnOMXtRR0zqCD_Hlve9fTXM';
    let resp = await fetch(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`,
    );
    // console.log("resp", resp);
    let respJson = await resp.json();

    let points = decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1],
      };
    });
    return coords;
  } catch (error) {
    return [
      {latitude: 37.8025259, longitude: -122.4351431},
      {latitude: 37.7896386, longitude: -122.421646},
      {latitude: 37.7665248, longitude: -122.4161628},
      {latitude: 37.7734153, longitude: -122.4577787},
      {latitude: 37.7948605, longitude: -122.4596065},
    ];
    // return error;
  }
};

const TestMapScreen = () => {
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    getDirections('52.5200066,13.404954', '50.1109221,8.6821267')
      .then(c => {
        setCoords(c);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const {height, width} = Dimensions.get('window');

  const LATITUDE_DELTA = 0.05;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: '90%',
          height: 140,
          borderRadius: 16,
          overflow: 'hidden',
        }}>
        <MapView
          style={{width: '100%', height: '100%'}}
          customMapStyle={mapStyle}
          // mapPadding={{left: 1000}} //remove Google title
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          {coords.length > 0 && (
            <Polyline
              // lineJoin="miter"
              coordinates={coords}
              strokeColor="#93CD4B" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                '#7F0000',
                '#febaba', // no color, creates a "long" gradient between the previous and next coordinate
                '#B24112',
                '#E5845C',
                '#238C23',
                // '#7F0000',
              ]}
              strokeWidth={6}
            />
          )}

          <Marker
            coordinate={{latitude: 37.7948605, longitude: -122.4596065}}
            flat
            anchor={{x: 0.5, y: 0.5}}>
            <CustomMarker />
          </Marker>
          <Marker
            coordinate={{latitude: 37.8025259, longitude: -122.4351431}}
            flat
            anchor={{x: 0.5, y: 0.5}}>
            <CustomMarker />
          </Marker>
        </MapView>
        <View style={{position: 'absolute', top: 50, left: 20}}>
          <Text style={{color: '#ffff'}}>Overlay Component</Text>
        </View>
      </View>
      {/*<Text>test</Text>*/}
    </View>
  );
};

export default TestMapScreen;

// {latitude: 37.8025259, longitude: -122.4351431},
// {latitude: 37.7896386, longitude: -122.421646},
// {latitude: 37.7665248, longitude: -122.4161628},
// {latitude: 37.7734153, longitude: -122.4577787},
// {latitude: 37.7948605, longitude: -122.4596065},
// // {latitude: 37.8025259, longitude: -122.4351431},
//
