import React, { Component } from 'react'
import { Text, View ,TextInput, Te} from 'react-native'

export default class NameScreen extends Component {
    renderTextTittle = ()=>{
        return (
            <Text style={{fontSize:28 ,padding:30}}>Enter your Name</Text>
        )
    }
    renderInputName = ()=>{
        return (
            <TextInput
            style={{textAlign:'center', width:'100%',borderWidth:1, borderColor:"#000000"}}
            value = 'Shadhin arafat'/>
        )
    }
    render() {
        return (
            <View style={{
                alignItems:'center',
                margin:30,}}>
                {this.renderTextTittle()}
                {this.renderInputName()}
            </View>
        )
    }
}
