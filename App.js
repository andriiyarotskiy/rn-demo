import type {Node} from 'react';
import React from 'react';
// import DraggableView from './src/Tutorial/DraggableView';
import {NavigationContainer} from '@react-navigation/native';
import NavStack from './src/navigation/navigation';
import {LogBox} from 'react-native';

const App: () => Node = () => {
  return (
    <>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </>
  );
};

export default App;

LogBox.ignoreAllLogs(true);
