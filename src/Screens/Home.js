import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ModalDropDown from '../components/Modal';

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
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      {/*<Button title={'open modal'} onPress={toggleModal} />*/}
      <Text>Modal</Text>
        <ModalDropDown
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
    </View>
  );
};

export default HomeScreen;
