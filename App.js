import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';

import Home from './screens/Home';
import Cities from './screens/Cities';
// import City from './screens/City'
// import Login from './screens/Login'
// import Signup from './screens/Signup'

// import { NavigationContainer } from '@react-navigation/native';
// import Navigator from './navigation/MainNavStack';

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
      <Home />
      {/* <Cities /> */}
      {/* <City /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
    </Provider>

  )
}

export default App
{/* <NavigationContainer>
      <Navigator />
    </NavigationContainer> */}