import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Navigator from './navigation/MainNavStack';
import Navigator from './navigation/DrawerNav';
import AppLoading from 'expo-app-loading';
import { LogBox } from "react-native"
LogBox.ignoreAllLogs(true)

import {
  useFonts,
  Nunito_400Regular,
  Nunito_900Black,
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito'

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  const [fontsLoaded] = useFonts({
    Nunito_900Black,
    Nunito_400Regular,
    Nunito_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </NavigationContainer>
    )
  }
}

export default App