import React, { Component } from 'react'
import { Image, View, Text} from 'react-native'
import {IMAGES} from '../../assets'

export default class NotificationScreen extends Component {
 
    render() {
        return (
            <View style={{flex:1, flexDirection:'column'}}>
               <Image source = {IMAGES.notification} resizeMode='contain' style={{width:'100%'}}/>
               <Text>Ride easy with real time trip updates</Text>
               <Text>Please enable push notifications from uber when prompted</Text>
            </View>
        )
    }
}
