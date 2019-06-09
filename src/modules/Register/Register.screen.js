import React, { Component } from 'react'
import {View, Image, Text, TextInput, StyleSheet } from 'react-native'
import {IMAGES} from '../../assets';

import styles from './Register.screen.styles'

export default class RegisterScreen extends Component {

    renderRegisterImage = () => {
        return (
            <View style = {styles.imageRegister}
            >
                <Image resizeMode="contain"
                source={IMAGES.register.image}></Image>
            </View>
            
        )
    }
    renderTextTittle = () =>{
        return (
            <Text style = {styles.textTittle}>Get moving with Uber</Text>
        )
    }

    renderInputPhone = ()=>{
        return (
            <View style ={{
                margin:30,
                alignItems :'center',
                flexDirection:'row'}}>
                    <View style = {styles.textPhoneArea}><Text >+880</Text></View>
                <TextInput
                    style={styles.inputPhone}
                    placeholder="Enter your mobile number"  
                    keyboardType={'numeric'}  />
            </View>
            
        )
    }

    renderTextLinkSocial = ()=>{
        return (
            <Text style = {styles.textLinkSocial}>Or connect using a social account</Text>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderRegisterImage()}
                {this.renderTextTittle()}
                {this.renderInputPhone()}
                {this.renderTextLinkSocial()}
            </View>
        )
    }
}




