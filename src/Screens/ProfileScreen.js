import {Button, Text, View} from 'react-native';
import React from 'react';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Free play Screen</Text>
      <Button title="Go to Back" onPress={() => navigation.goBack()} />
      <Button title="Go to Back" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default ProfileScreen;
