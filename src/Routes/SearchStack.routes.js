import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../Screens/Search';
import Search2 from '../Screens/Search2';

const SearchStack = createStackNavigator();
export default () => {
  return(
    <SearchStack.Navigator>
    <SearchStack.Screen 
      name="Search"
      component={Search}
    />
    <SearchStack.Screen 
      name="Search2"
      component={Search2}
    />
  </SearchStack.Navigator>
  );
};