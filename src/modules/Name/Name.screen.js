import React, { PureComponent } from 'react'
import { Text, View ,TextInput,} from 'react-native'

import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
import SkipHeader from '../navigation/headers/Skip.header'
import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'

export default class NameScreen extends PureComponent {
    constructor(props){
        super(props)
        this.userData = this.props.navigation.getParam('userData',null);
        this.state = {
            text:'Shadhin arafat'
        }
    }

    renderHeader = ()=>{
        return (
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                {ArrowLeftHeader({onPress: this._onClickBack})}
                {SkipHeader({onPress: this._onClickSkip})}
            </View>
        )
    }
    renderTextTittle = ()=>{
        return (
            <Text style={{margin:30, marginTop:0, fontSize:28}}>Enter your Name</Text>
        )
    }
    renderInputName = ()=>{
        return (
            <TextInput
            style={{margin:30,textAlign:'center', backgroundColor:'#f8f8f8',
            elevation: 10,}}
            onChangeText = {(text)=> this.setState({text})}
            value = {this.state.text} editable = {true}/>
        )
    }
    _onClickSkip = ()=>{
        this.props.navigation.navigate('ChooseGender',{
            userData:this.userData
        });
    }
    _onClickBack = ()=>{
        this.props.navigation.goBack();
    }

    _onClickNext = ()=>{
        this.props.navigation.navigate('ChooseGender',{
            userData:{
                ...this.userData,
                name:this.state.text,
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
            <View style={{flex:1,flexDirection:'column'}}>
                {this.renderHeader()}
                <View style={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center',
                    }}>
                        {this.renderTextTittle()}
                        {this.renderInputName()}
                </View>
                {this.renderFooter()}
            </View>
        )
    }
}
