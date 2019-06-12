/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import WelcomeScreen from './src/modules/Welcome/Welcome.screen';
import RegisterScreen from './src/modules/Register/Register.screen';
import VerifyScreen from './src/modules/Verify/Verify.screen';
import NameScreen from './src/modules/Name/Name.screen';
import GenderScreen from './src/modules/Gender/Gender.screen';
import ProfileScreen from './src/modules/Profile/Profile.screen';
import NotificationScreen from './src/modules/Notification/Notification.screen';
import MapsScreen from './src/modules/Maps/Maps.screen';
import DiscoveryScreen from './src/modules/Discovery/Discovery.screen';
import AuthLoadingScreen from './src/modules/navigation/AuthLoading.screen';

import { createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
const AppStack = createStackNavigator({ Maps: MapsScreen, Discovery: DiscoveryScreen}, {defaultNavigationOptions: {header:null}});
const AuthStack = createStackNavigator({ 
  Welcome: WelcomeScreen, 
  Register: RegisterScreen, 
  Verify: VerifyScreen,
  NameInput: NameScreen,
  ChooseGender: GenderScreen,
  Avatar: ProfileScreen,
  NotifiPermision: NotificationScreen}, {defaultNavigationOptions: {header:null}});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));