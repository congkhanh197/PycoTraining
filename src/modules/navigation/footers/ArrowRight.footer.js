import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, Text ,Image} from 'react-native'
import {IMAGES} from '../../../assets'

const ArrowRightFooter = (props)=>{
    return (
        <TouchableOpacity style={{flex:0,width:80,height:80, borderRadius: 40,
            backgroundColor:'#f8f8f8',
            elevation: 10,alignItems:'center',justifyContent:'center'}}
            onPress={props.onPress}>
            <Image source={IMAGES.arrowRight.black}
                resizeMode='cover'
                style={{width:24,height:24}}/>
        </TouchableOpacity>
    )
}
            
export default ArrowRightFooter;

