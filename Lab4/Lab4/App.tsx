/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigation from './src/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
