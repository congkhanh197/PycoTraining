import React, { Component } from 'react'
import { Image, View, Text} from 'react-native'
import {IMAGES} from '../../assets'

import LogoHeader from '../navigation/headers/Logo.header';
import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'

export default class NotificationScreen extends Component {
    constructor(props){
        super(props)
        this.userData = this.props.navigation.getParam('userData',{});
    }

    _onClickNext = ()=>{
        this.props.navigation.navigate('App',{
            userData:this.userData
        });
    }
    _renderFooter = () =>{
        return (
            <View style={{flexDirection:'row-reverse', margin:30}}>
                {ArrowRightFooter({onPress:this._onClickNext})}
            </View>
        )
    }
 
    render() {
        return (
            <View style={{flex:1, flexDirection:'column',justifyContent:'space-between'}}>
                <View style={{margin:30}}>{LogoHeader()}</View>
                
                <Image source = {IMAGES.notification} resizeMode='contain' style={{width:'100%'}}/>
                <Text style={{fontSize:28, marginHorizontal:30,}} numberOfLines={2}>Ride easy with real time trip updates</Text>
                <Text style={{fontSize:13.4, marginHorizontal:30,}} numberOfLines={2}>Please enable push notifications from              uber when prompted</Text>
                {this._renderFooter()}
            </View>
        )
    }
}
