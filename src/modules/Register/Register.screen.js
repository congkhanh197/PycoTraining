import React, { Component } from 'react'
import {View, Image, Text, TextInput, StyleSheet } from 'react-native'
import {IMAGES} from '../../assets';
// import console = require('console');

// import styles from './Register.screen.styles'

export default class RegisterScreen extends Component {

    renderRegisterImage = () => {
        return (
            <View style = {styles.imageRegister}
            >
                <Image resizeMode="contain"
                source={IMAGES.register.image}/>
            </View>
            
        )
    }
    renderTextTittle = () =>{
        return (
            <Text style = {styles.textTittle}>Get moving with Uber</Text>
        )
    }
    _onSubmitPhoneNumber = (event)=>{
        this.props.navigation.navigate('Verify', 
        {phone:event.nativeEvent.text})
    }

    renderInputPhone = ()=>{
        return (
            <View style ={{
                margin:30,
                alignItems :'center',
                flexDirection:'row'}}
            >
                <View style = {styles.textPhoneArea}>
                    <Text >+880</Text>
                </View>
                <View style = {styles.inputPhone}>
                    <TextInput
                    
                    onSubmitEditing={this._onSubmitPhoneNumber}
                    style = {{ textAlign:'center',}}
                    placeholder="Enter your mobile number"  
                    keyboardType={'phone-pad'}  />
                </View>
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
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageRegister:{
        flex:1,
        overflow: 'hidden',
        width:'100%',
    },
    textTittle:{
        paddingHorizontal:30,
        marginTop: 38.5,
        fontSize: 25,
        color:"#353B50"
    },

    textPhoneArea:{
        flex:1,
        paddingLeft:20,
        fontSize:15,
    },
    inputPhone:{
        backgroundColor:'#f8f8f8',
        elevation: 10,
        marginLeft:40,
        flex:6,
        height: 53,
        fontSize:15,
    },
    textLinkSocial:{
        marginLeft: 30,
        marginBottom: 30,
        color:'#2697AC',
        fontSize: 15,
    }
})




