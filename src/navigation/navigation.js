import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import TestCalendarScreen from '../Screens/TestCalendarScreen';

const Stack = createStackNavigator();

const authScreens = {
  TestCalendar: TestCalendarScreen,
  // LiveSearch: LiveSearchScreen, //SignInScreen
};

const homeScreens = {
  // Calendar: CalendarScreen,
};

const userScreens = {
  Profile: ProfileScreen,
};

const NavStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {Object.entries({
        // Use the screens normally
        ...authScreens,
        ...homeScreens,
        // Use some screens conditionally based on some condition
        ...userScreens,
      }).map(([name, component]) => (
        <Stack.Screen key={name} name={name} component={component}/>
      ))}
    </Stack.Navigator>
  );
};

export default NavStack;
