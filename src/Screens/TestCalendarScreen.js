import {Button, Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Calendar from '../components/Calendar';

const TestCalendarScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Home Screen</Text>
      <View style={SignInScreenStyle.emptyContent} />
      <View style={SignInScreenStyle.container}>
        <View style={SignInScreenStyle.content}>
          <Calendar />
        </View>
      </View>
      {/*<Button title="Go to FreePlay" onPress={() => navigation.navigate('Home')}/>*/}
    </View>
  );
};
export default TestCalendarScreen; //'horizontalList'

const SignInScreenStyle = StyleSheet.create({
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
  },
});
