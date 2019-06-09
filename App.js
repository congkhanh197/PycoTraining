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

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {VerifyContainer()}
      </View>
    );
  }
}