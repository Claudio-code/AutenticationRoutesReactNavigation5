import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack from './HomeStack.routes';
import ProfileStack from './ProfileStack.routes';
import SearchStack from './SearchStack.routes';

import CreateAccount from '../Screens/CreateAccount';
import Splash from '../Screens/Splash';
import SignIn from '../Screens/SignIn';

import { AuthContext } from '../Context';

const AuthStack = createStackNavigator();
const AuthScreens = () => {
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </AuthStack.Navigator>    
  );
};

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => {
  
  return(
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen name="App" component={DrawerStack} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthScreens} />
      )}
    </RootStack.Navigator>
  );
};


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

const Drawers = createDrawerNavigator();
const DrawerStack = () => {
  return(
    <Drawers.Navigator initialRouteName="Profile">
      <Drawers.Screen  name="Home" component={Tabs} />
      <Drawers.Screen  name="Profile" component={ProfileStack} />
    </Drawers.Navigator>
  );
}

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
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
