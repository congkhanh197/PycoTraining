import React, { Component } from 'react'
import {View, Image, Text, TextInput, StyleSheet, ActivityIndicator,TouchableOpacity} from 'react-native'
import {IMAGES} from '../../assets';

// import styles from './Verify.screen.styles'

export default class VerifyScreen extends Component {
    constructor(props){
        super(props);
        this.phone = this.props.navigation.getParam('phone','null');
        this.state = {
            isLoading: true,
        }
    }
    renderTextTittle = () => {
        return (
            <Text style={{
                margin:30,
                marginTop: 100, marginRight:70, color:"#353B50", fontSize: 18}}>
                Enter the 4-digits code sent to you at {this.phone}.
                <Text style={{color: '#25B7DD',fontSize: 18}}> Did you enter the correct number?</Text>
            </Text>
        )
    }
    renderInputNumber = () => {
        return (
            <View style= {{margin:30, flexDirection: 'row',
            justifyContent: 'space-between'}}>
                <TextInput style = {styles.inputNumber}
                placeholder={this.state.code.code1}  
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                placeholder={this.state.code.code2}    
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                placeholder={this.state.code.code3} 
                keyboardType={'numeric'}/>
                <TextInput style = {styles.inputNumber}
                placeholder={this.state.code.code4}    
                keyboardType={'numeric'}/>
            </View>
        )
    }
    renderTextNoCode = ()=>{
        return (
            <View style= {{alignItems:'center', margin:30, flexDirection: 'row'}}>
                
                <Text style ={{flex:1, color:'#2697AC'}}>I didn't receive code</Text>
                <TouchableOpacity style={{flex:0,width:80,height:80, borderRadius: 40,
                    backgroundColor:'#f8f8f8',
                    elevation: 10,alignItems:'center',justifyContent:'center'}}
                    onPress={()=>
                    this.props.navigation.navigate('NameInput')}>
                    <Image source={IMAGES.arrowRight.black}
                        
                        resizeMode='cover'
                        style={{width:24,height:24}}/>
                </TouchableOpacity>
                
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
        console.log(this.phone)
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