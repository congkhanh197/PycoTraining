import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, SafeAreaView } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class WelcomeScreen extends Component {
  render() {
    return (
      
         <View style={styles.container}>
        <Image
        
          source={this.props.data.logo}
        />
        <Image
          resizeMethod={'scale'}
          resizeMode={'contain'}
          style={styles.welcomeImage}
          source={this.props.data.imageWelcome}
        />
        <Text style={styles.textSlogan}>{this.props.data.textSlogan}</Text>
        <Text style={styles.textDescribe}>{this.props.data.textDescribe}</Text>
        <TouchableOpacity
          onPress={this.props.data.onClickRegisterbyPhone}
          style={styles.touchableOpacity}
        >
          <View style={{flex:1, flexDirection:'row',}}>
          <Text style={styles.buttonText}>{this.props.data.textButton}</Text>
          <Image source={this.props.data.imageArrowRight} />
          </View>
          
        </TouchableOpacity>
        </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  welcomeImage: {
    width: "100%",
  },
  textSlogan: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDescribe: {
    fontSize: 10,
  },
  touchableOpacity: {
    flexDirection:'row',
    backgroundColor: '#000000',
    borderRadius: 10,
    padding:10,
    paddingRight:20,
  },
  buttonText: {
    flex:1,
    textAlign:'center',
    color: 'white',
  },
  buttonArrow: {
    flex:1,
  }
});
