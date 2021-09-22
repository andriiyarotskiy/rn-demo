import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import TestCalendarScreen from '../Screens/TestCalendarScreen';
import TestMapScreen from '../Screens/TestMapScreen';
import HomeScreen from '../Screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const authScreens = {
  Home: HomeScreen,
  // Map: TestMapScreen,
  // TestCalendar: TestCalendarScreen,
  // LiveSearch: LiveSearchScreen,
};

const homeScreens = {
  // Calendar: CalendarScreen,
};

const userScreens = {
  Profile: ProfileScreen,
};

const NavStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries({
          // Use the screens normally
          ...authScreens,
          ...homeScreens,
          // Use some screens conditionally based on some condition
          ...userScreens,
        }).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))}
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default NavStack;
