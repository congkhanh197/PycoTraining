import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

import LogoHeader from '../navigation/headers/Logo.header';

import {IMAGES} from '../../assets';
import styles from './Welcome.screen.styles';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class WelcomeScreen extends Component {

    _onClickRegisterbyPhone = () => {
        this.props.navigation.navigate('Register');
    };

    _renderWelcomeImage = ()=>{
        return (
            <Image
                resizeMethod={'scale'}
                resizeMode={'contain'}
                style={styles.welcomeImage}
                source={IMAGES.welcome.image}
            />
        ); 
    }
    _renderWelcomeSlogan = () =>{
        return (
            <Text style={styles.textSlogan}>Your ride, on demand</Text>
        )
    }
    _renderWelcomeText = () =>{
        return (
            <Text style={styles.textDescribe}>Whether you're headed to work, the airport, or out on the town, Uber connects you with reliable ride in minutes. One tap and a car comes directly to you.</Text>
        )
    }

    _renderRegisterButton = () =>{
        return (
            <TouchableOpacity
                onPress={this._onClickRegisterbyPhone}
                style={styles.touchableOpacity}
            >
                <Text style={styles.buttonText}>Register by Phone</Text>
                <Image source={IMAGES.arrowRight.white}/>

            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {LogoHeader()}
                {this._renderWelcomeImage()}
                {this._renderWelcomeSlogan()}
                {this._renderWelcomeText()}
                {this._renderRegisterButton()}
            </View>
        );
    }
}


