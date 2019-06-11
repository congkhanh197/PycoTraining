import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, Text ,Image} from 'react-native'
import {IMAGES} from '../../../assets'

const ArrowLeftHeader = (props)=>{
    return (
        <TouchableOpacity 
            onPress = {props.onPress}
            style={{width:84, height:84,alignItems:'center',justifyContent:'center'}}>
            <Image
                style={{width:24, height:24}}
                resizeMode ='cover'
                source={IMAGES.arrowLeft.black}/>
        </TouchableOpacity>
    )
}
            
export default ArrowLeftHeader;

