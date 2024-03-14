import React from 'react';
import RootComponent from './src/views/RootComponent';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <NavigationContainer>
      <RootComponent />
    </NavigationContainer>
  );
};

export default App;
