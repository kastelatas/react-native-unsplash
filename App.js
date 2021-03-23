import * as React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'
import store from './store/index'
import Home from "./src/views/Home";
import Photo from "./src/views/Photo";

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Photo"
            component={Photo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;
