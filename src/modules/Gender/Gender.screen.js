import React, { Component } from 'react'
import { Image, View ,TextInput, Te} from 'react-native'
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
    renderGenderItem = (source)=>{
        return(
            <Image style={{margin:10}} source={source}></Image>
        
        )
    }
 
    render() {
        return (
            <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}} >
                {this.renderHeader()}
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {this.renderGenderItem(IMAGES.male)}
                    {this.renderGenderItem(IMAGES.female)}    
                </View>
                {this.renderFooter()}
            </View>
           
        )
    }
}
