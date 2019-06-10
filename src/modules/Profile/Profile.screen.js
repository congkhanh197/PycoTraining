import React, { Component } from 'react'
import { Image, View ,Text, ImageBackground } from 'react-native'
import {IMAGES} from '../../assets'

export default class GenderScreen extends Component {
 
    render() {
        return (
            <View style={{flex:1, marginLeft:30,justifyContent:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <ImageBackground style={{width:150,height:150}} source={IMAGES.profile}>
                        <Image source={IMAGES.camera}/>
                    </ImageBackground >
                    <Text>Upload profile picture</Text>
                </View>
                
            </View>
        )
    }
}
