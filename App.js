import React from 'react';
import RootComponent from './src/views/RootComponent';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootComponent />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
