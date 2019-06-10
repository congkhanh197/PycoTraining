/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import WelcomeContainer from './src/modules/Welcome/Welcome.container';
import RegisterContainer from './src/modules/Register/Register.container';
import VerifyContainer from './src/modules/Verify/Verify.container';
import NameContainer from './src/modules/Name/Name.container';
import GenderContainer from './src/modules/Gender/Gender.container';
import ProfileContainer from './src/modules/Profile/Profile.container';
import NotificationContainer from './src/modules/Notification/Notification.container';
import MapsContainer from './src/modules/Maps/Maps.container';
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {MapsContainer()}
      </View>
    );
  }
}