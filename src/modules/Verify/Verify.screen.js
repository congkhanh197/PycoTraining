import React, { Component } from 'react'
import {View, Image, Text, TextInput, StyleSheet } from 'react-native'
import {IMAGES} from '../../assets';

// import styles from './Verify.screen.styles'

export default class VerifyScreen extends Component {

    renderTextTittle = () => {
        return (
            <Text style={{
                margin:30,
                marginTop: 100, marginRight:70, color:"#353B50", fontSize: 18}}>
                Enter the 4-digits code sent to you at 1847129477.
                <Text style={{color: '#25B7DD',fontSize: 18}}> Did you enter the correct number?</Text>
            </Text>
        )
    }
    renderInputNumber = () => {
        return (
            <View style= {{margin:30, flexDirection: 'row',
            justifyContent: 'space-between'}}>
                <TextInput style = {styles.inputNumber}
                placeholder="0"  
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                placeholder="0"  
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                placeholder="0"  
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                placeholder="0"  
                keyboardType={'numeric'}/>
            </View>
        )
    }
    renderTextNoCode = ()=>{
        return (
            <View style= {{alignItems:'center', margin:30, flexDirection: 'row'}}>
                <Text style ={{flex:1, color:'#2697AC'}}>I didn't receive code</Text>
                <View style={{flex:0,width:80,height:80, borderRadius: 40, borderWidth: 1,
                        borderColor: 'black'}}>
                    <Image source={IMAGES.arrowRight}
                        resizeMode='center'
                        style={{width:20,height:20}}/>
                </View>
                
            </View>
            
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
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