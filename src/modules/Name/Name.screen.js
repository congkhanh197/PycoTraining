import React, { PureComponent } from 'react'
import { Text, View ,TextInput,} from 'react-native'
import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
import SkipHeader from '../navigation/headers/Skip.header'

export default class NameScreen extends PureComponent {

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
            value = 'Shadhin arafat'/>
        )
    }
    _onClickSkip = ()=>{

    }
    _onClickBack = ()=>{
        this.props.navigation.goBack();
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
            </View>
        )
    }
}
