import React, { Component } from 'react'
import { Image, View ,TouchableOpacity} from 'react-native'
import {IMAGES} from '../../assets'

import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
import SkipHeader from '../navigation/headers/Skip.header'
import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'

export default class GenderScreen extends Component {
    constructor(props){
        super(props)
        this.userData = this.props.navigation.getParam('userData',{});
        this.state = {
            gender:'',
        }
    }

    _onClickSkip = ()=>{
        this.props.navigation.navigate('Avatar',{
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
        const tranferData = this.state.gender == ""?{
            userData:this.userData
        } :{userData:{
            ...this.userData,
            gender:this.state.gender
        } }
        this.props.navigation.navigate('Avatar',tranferData);
    }
    renderFooter = () =>{
        return (
            <View style={{flexDirection:'row-reverse', margin:30}}>
                {ArrowRightFooter({onPress:this._onClickNext})}
            </View>
        )
    }
    _onPressGender = (gender)=>()=>{
        this.setState({
            ...this.state,
            gender:gender
        })
    }
    renderGenderItem = (source, gender)=>{
        const style = this.state.gender == gender? 
        {borderWidth:2,borderRadius:49,elevation:10,borderColor:'#a8c2ed'}:{}
        return(       
            <View style={{...style,margin:10}}>
                <TouchableOpacity
                    style = {{width:95, height:94,}}
                    onPress={this._onPressGender(gender)}>
                    <Image style={{width:'100%'}}  resizeMode="cover" source={source}></Image>
                </TouchableOpacity>
            </View>
        )
    }
 
    render() {
        return (
            <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}} >
                {this.renderHeader()}
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    {this.renderGenderItem(IMAGES.male,'male')}
                    {this.renderGenderItem(IMAGES.female,'female')}    
                </View>
                {this.renderFooter()}
            </View>
        )
    }
}
