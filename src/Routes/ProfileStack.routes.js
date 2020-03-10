import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../Screens/Profile';

const ProfileStak = createStackNavigator();

export default ({ navigation }) => {
  return(
    <ProfileStak.Navigator
      initialRouteName="Profile"
    >
      <ProfileStak.Screen 
        name="Profile"
        component={Profile}
      />
    </ProfileStak.Navigator>
  );
};