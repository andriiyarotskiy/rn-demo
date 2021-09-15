import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputTimePicker from '../components/InputTimePicker';

const TestCalendarScreen = ({navigation}) => {
  const onChangeTextMin = text => {
    console.log('text min', text);
  };

  const onChangeTextMax = text => {
    console.log('text max', text);
  };

  return (
    <View style={{flex: 1}}>
      <Text>Home Screen</Text>
      <View style={styles.emptyContent} />
      <View style={styles.container}>
        <View style={styles.content}>
          <InputTimePicker
            placeholder="00:00 min"
            description="min"
            onChangeText={onChangeTextMin}
          />
          <InputTimePicker
            placeholder="00:00 max"
            description="max"
            onChangeText={onChangeTextMax}
          />
          {/*<Calendar />*/}
        </View>
      </View>
      {/*<Button title="Go to FreePlay" onPress={() => navigation.navigate('Home')}/>*/}
    </View>
  );
};
export default TestCalendarScreen; //'horizontalList'

const styles = StyleSheet.create({
  emptyContent: {
    flex: 0.35,
  },
  container: {
    flex: 0.65,
    width: '94%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
    backgroundColor: 'grey',
    bottom: 0,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
