import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './HomeStack.routes';
import ProfileStack from './ProfileStack.routes';
import SearchStack from './SearchStack.routes';

import Splash from '../Screens/Splash';
import SignIn from '../Screens/SignIn';
import CreateAccount from '../Screens/CreateAccount';


const AuthStack = createStackNavigator();
const Drawers = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

const Tabs = () => (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={HomeStack}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchStack}
      />
    </BottomTabs.Navigator>
);


export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState();

  const authContext = React.useMemo(() => {
    return{
      signIn: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    };
  }, []) 

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }


  return (
    <NavigationContainer >
      {userToken ? (
        <Drawers.Navigator>
          <Drawers.Screen  name="Home" component={HomeStack} />
          <Drawers.Screen  name="Profile" component={ProfileStack} />
        </Drawers.Navigator>

      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignIn} />
          <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
        </AuthStack.Navigator>    
      )}
    </NavigationContainer>
  );
};
