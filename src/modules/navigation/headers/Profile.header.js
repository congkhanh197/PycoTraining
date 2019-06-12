import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, Text ,Image} from 'react-native'
import {IMAGES} from '../../../assets'

const ProfileHeader = (props)=>{
    return (
        <TouchableOpacity 
            onPress = {props.onPress}
            style={{alignSelf:"baseline", height:84,flexDirection:'row',alignItems:'center'}}>
            <View style={{alignItems:'flex-end', flexDirection:'column'}}>
                <Text style={{color:'black',fontSize:15}}>{props.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:11, marginRight:3}}>{props.points}</Text>
                    <Image source={IMAGES.star}/>
                </View>
            </View>
            <Image
                style={{marginLeft:15, marginRight:30,width:35, height:35}}
                resizeMode ='cover'
                source={props.image}/>
        </TouchableOpacity>
    )
}
            
export default ProfileHeader;

