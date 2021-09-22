import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ModalDropDown from '../components/Modal';
import PieProgressBar from '../components/PieProgressBar';

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    // console.log('press');
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: '90%', height: '20%'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#242731',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <PieProgressBar currentProgress={80} title="aerobic" />
          <PieProgressBar currentProgress={50} title="anaerobic" />
        </View>
      </View>
      {/*<Button title={'open modal'} onPress={toggleModal} />*/}
      {/*<Text>Modal</Text>*/}
      {/*  <ModalDropDown*/}
      {/*    isModalVisible={isModalVisible}*/}
      {/*    toggleModal={toggleModal}*/}
      {/*  />*/}
    </View>
  );
};

export default HomeScreen;
