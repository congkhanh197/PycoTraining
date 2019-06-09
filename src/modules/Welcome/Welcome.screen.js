import React, {Component} from 'react';
import {Text, Image, View, TouchableOpacity, ToastAndroid} from 'react-native';


import {IMAGES} from '../../assets';
import styles from './Welcome.screen.styles';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const onClickRegisterbyPhone = () => {
    ToastAndroid.show('RegisterbyPhoneButton', ToastAndroid.SHORT);
    //TODO Navigation to next View;
};
export default class WelcomeScreen extends Component {

    renderLogo = ()=>{
        return (
            <Image
                source={IMAGES.logo}
            />
        )
    }
    renderWelcomeImage = ()=>{
        return (
            <Image
                resizeMethod={'scale'}
                resizeMode={'contain'}
                style={styles.welcomeImage}
                source={IMAGES.welcome.image}
            />
        ); 
    }
    renderWelcomeSlogan = () =>{
        return (
            <Text style={styles.textSlogan}>Your ride, on demand</Text>
        )
    }
    renderWelcomeText = () =>{
        return (
            <Text style={styles.textDescribe}>Whether you're headed to work, the airport, or out on the town, Uber connects you with reliable ride in minutes. One tap and a car comes directly to you.</Text>
        )
    }

    renderRegisterButton = () =>{
        return (
            <TouchableOpacity
                onPress={onClickRegisterbyPhone}
                style={styles.touchableOpacity}
            >
                <Text style={styles.buttonText}>Register by Phone</Text>
                <Image source={IMAGES.arrowRight}/>

            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
                {this.renderWelcomeImage()}
                {this.renderWelcomeSlogan()}
                {this.renderWelcomeText()}
                {this.renderRegisterButton()}
            </View>
        );
    }
}


