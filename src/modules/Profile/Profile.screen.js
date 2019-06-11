import React, { Component } from 'react'
import { Image, View ,Text, ImageBackground } from 'react-native'
import {IMAGES} from '../../assets'

import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
import SkipHeader from '../navigation/headers/Skip.header'
import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'

export default class GenderScreen extends Component {


    _onClickSkip = ()=>{

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
        this.props.navigation.navigate('Avatar');
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
                    <ImageBackground style={{margin:30,marginRight:25,width:120,height:120, alignItems:"center",justifyContent:'center'}} source={IMAGES.profile}>
                        <Image source={IMAGES.camera}/>
                    </ImageBackground >
                    <Text style={{flex: 1,fontSize:25,paddingRight:30}} numberOfLines={2}>Upload   profile picture</Text>
                </View>
                {this.renderFooter()}
            </View>
        )
    }
}
