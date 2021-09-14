import type {Node} from 'react';
import React from 'react';
// import DraggableView from './src/Tutorial/DraggableView';
import {NavigationContainer} from '@react-navigation/native';
import NavStack from './src/navigation/navigation';

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

console.disableYellowBox = true;
