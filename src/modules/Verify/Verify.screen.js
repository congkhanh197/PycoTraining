import React, { Component } from 'react'
import {View, Image, Text, TextInput, StyleSheet, ActivityIndicator,TouchableOpacity} from 'react-native'
import {IMAGES} from '../../assets';

import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'
// import styles from './Verify.screen.styles'

export default class VerifyScreen extends Component {
    constructor(props){
        super(props);
        this.phone = this.props.navigation.getParam('phone','null');
        this.state = {
            isLoading: true,
        }
    }
    _onClickBack = ()=>{
        this.props.navigation.goBack();
    }

    renderHeader = ()=>{
        return (
            <View style={{marginTop:20}}>
                {ArrowLeftHeader({onPress: this._onClickBack})}
            </View>
        )
    }
    renderTextTittle = () => {
        return (
            <Text style={{
                margin:30,
                marginTop: 50, marginRight:70, color:"#353B50", fontSize: 18}}>
                Enter the 4-digits code sent to you at {this.phone}.
                <Text style={{color: '#25B7DD',fontSize: 18}}> Did you enter the correct number?</Text>
            </Text>
        )
    }
    renderInputNumber = () => {
        return (
            <View style= {{marginHorizontal:30, flexDirection: 'row',
            justifyContent: 'space-between'}}>
                <TextInput style = {styles.inputNumber}
                value={this.state.code.code1}  
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                value={this.state.code.code2}    
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                value={this.state.code.code3} 
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                value={this.state.code.code4}    
                keyboardType={'numeric'}/>
            </View>
        )
    }

    _onClickNext = ()=>
    this.props.navigation.navigate('NameInput',{
        userData:{
            phone:this.phone,
        }
    })

    renderTextNoCode = ()=>{
        return (
            <View style= {{alignItems:'center', margin:30, flexDirection: 'row',justifyContent:'space-between'}}>
                
                <Text style ={{flex:1, color:'#2697AC'}}>I didn't receive code</Text>
                {ArrowRightFooter({onPress:this._onClickNext})}
                
            </View>
            
        )
    }

    async componentDidMount(){
        try {
            const data = await this._getCodeFromAPI();
            const code = await data.json();
            this.setState({code: code, isLoading:false})
        } catch (error) {
            console.log('error: ',error)
        }
    }
    _getCodeFromAPI = async ()=>{
        return fetch('https://demo4820430.mockable.io/user/verify',
        {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone:this.phone,
            })
        })
    }
    
    render() {
        return this.state.isLoading?<View style ={{flex:1,alignItems:'center',justifyContent:'center'}}><ActivityIndicator/></View> :(
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderTextTittle()}
                {this.renderInputNumber()}
                {this.renderTextNoCode()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    inputNumber:{
        flex:1,
        height:50,
        textAlign: 'center',
    }
})