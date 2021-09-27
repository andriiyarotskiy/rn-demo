import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ModalDropDown from '../components/Modal';
import PieProgressBar from '../components/PieProgressBar';
import MapDisplay from './MapDisplay';

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    // console.log('press');
    setModalVisible(!isModalVisible);
  };

  const sheetRef = React.useRef(null);

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <View style={{height: 100}}>
        <Text>Header</Text>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={id => id.toString()}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                sheetRef.current.snapTo(0);
              }}>
              <View
                style={{
                  width: '100%',
                  backgroundColor: 'purple',
                  height: 200,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontSize: 50}}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <ModalDropDown sheetRef={sheetRef}>
        <View style={styles.progressContainer}>
          <PieProgressBar currentProgress={80} title="aerobic" />
          <PieProgressBar currentProgress={50} title="anaerobic" />
        </View>
        <MapDisplay />
        {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
          <View key={item.toString()} style={styles.item}>
            <Text style={{color: '#fff', fontSize: 25, textAlign: 'center'}}>
              {item}
            </Text>
          </View>
        ))}
      </ModalDropDown>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  progressContainer: {
    height: 200,
    backgroundColor: '#242731',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 64,
    backgroundColor: 'grey',
    marginBottom: 20,
  },
});
