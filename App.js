/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ToastAndroid
} from 'react-native';
import WelcomeScreen from './assets/components/WelcomeScreen';

const WelcomeData =  {
    logo: require('./assets/images/welcome/logo.png'),
    imageWelcome: require('./assets/images/welcome/welcome_image.png'),
    imageArrowRight: require('./assets/images/welcome/arrow_right.png'),
    textSlogan: "Your ride, on demand",
    textDescribe: "Whether you're headed to work, the airport, or out on the town, Uber connects you with reliable ride in minutes. One tap and a car comes directly to you.",
    textButton:"Register by Phone",
    onClickRegisterbyPhone: function () {
      ToastAndroid.show('RegisterbyPhoneButton', ToastAndroid.SHORT);
      //TODO Navigation to next View;
    },
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
          <WelcomeScreen data={WelcomeData}></WelcomeScreen>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});