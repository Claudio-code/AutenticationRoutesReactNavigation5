import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/Home';
import Details from '../Screens/Details';

const HomeStack = createStackNavigator();

export default ({ navigation }) => {
  return(
    <HomeStack.Navigator
      initialRouteName="Home"
    >
      <HomeStack.Screen 
        name="Home"
        component={Home}
      />
      <HomeStack.Screen 
        name="Details"
        component={Details}
      />
    </HomeStack.Navigator>
  );
};