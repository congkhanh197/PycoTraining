import React, { Component } from 'react'
import { Image, View ,Text, ImageBackground, TouchableOpacity } from 'react-native'
import {IMAGES} from '../../assets'

import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
import SkipHeader from '../navigation/headers/Skip.header'
import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'

export default class GenderScreen extends Component {
    constructor(props){
        super(props)
        this.userData = this.props.navigation.getParam('userData',null)

    }


    _onClickSkip = ()=>{
        this.props.navigation.navigate('NotifiPermision',{
            userData:this.userData
        });
    }
    _onClickBack = ()=>{
        this.props.navigation.goBack();
    }
    renderHeader = ()=>{
        return (
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                {ArrowLeftHeader({onPress: this._onClickBack})}
                {SkipHeader({onPress: this._onClickSkip})}
            </View>
        )
    }

    _onClickNext = ()=>{
        this.props.navigation.navigate('NotifiPermision',{
            userData:{
                ...this.userData,
                avatar:'urltoAvatar'
            }
        });
    }
    renderFooter = () =>{
        return (
            <View style={{flexDirection:'row-reverse', margin:30}}>
                {ArrowRightFooter({onPress:this._onClickNext})}
            </View>
        )
    }
 
    render() {
        return (
            <View style={{flex:1,justifyContent:'space-between'}}>
                {this.renderHeader()}
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <TouchableOpacity>
                        <ImageBackground style={{margin:30,marginRight:25,width:120,height:120, alignItems:"center",justifyContent:'center'}} source={IMAGES.profile}>
                            <Image source={IMAGES.camera}/>
                        </ImageBackground >
                    </TouchableOpacity>
                    
                    <Text style={{flex: 1,fontSize:25,paddingRight:30}} numberOfLines={3}>Upload          profile picture</Text>
                </View>
                {this.renderFooter()}
            </View>
        )
    }
}
