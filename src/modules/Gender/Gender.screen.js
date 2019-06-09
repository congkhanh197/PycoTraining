import React, { Component } from 'react'
import { Image, View ,TextInput, Te} from 'react-native'
import {IMAGES} from '../../assets'

export default class GenderScreen extends Component {
 
    render() {
        return (
            <View style={{flex:1, margin:30,justifyContent:'center'}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Image source={IMAGES.male}></Image>
                    <Image source={IMAGES.female}></Image>
                </View>
                
            </View>
        )
    }
}
