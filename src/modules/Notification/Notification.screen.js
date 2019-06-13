import React, { Component } from 'react'
import { Image, View, Text,Alert,ActivityIndicator} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {IMAGES} from '../../assets'

import LogoHeader from '../navigation/headers/Logo.header';
import ArrowRightFooter from '../navigation/footers/ArrowRight.footer'


export default class NotificationScreen extends Component {
    constructor(props){
        super(props)
        this.userData = this.props.navigation.getParam('userData',{});
        console.log("noti",this.userData);
        this.state = {
            isLoading : true
        }
    }

    _onClickNext = ()=>{
        this.props.navigation.navigate('App',{
            userData:this.userData
        });
    }
    _renderFooter = () =>{
        return (
            <View style={{flexDirection:'row-reverse', margin:30}}>
                {ArrowRightFooter({onPress:this._onClickNext})}
            </View>
        )
    }
    _onErrorHandler(e){
        Alert.alert(
            'Error!',
            'We get '+e,
            [
              {text: 'Retry', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
    }

    storeData = async (userToken) => {
        try {
            await AsyncStorage.setItem('userToken',userToken.userToken)
        } catch (e) {
            console.log('error: ',error)
            this._onErrorHandler(e)
        }
    }

    async componentDidMount(){
        try {
            const data = await this._getCodeFromAPI();
            const userToken = await data.json();
            console.log(userToken)
            await this.storeData(userToken)
            this.setState({isLoading:false})
        } catch (error) {
            console.log('error: ',error)
            this._onErrorHandler(e)
        }
    }
    _getCodeFromAPI = async ()=>{
        return fetch('https://demo4820430.mockable.io/user/token',
        {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userData:this.userData
            })
        })
    }
 
    render() {
        return this.state.isLoading?<View style ={{flex:1,alignItems:'center',justifyContent:'center'}}><ActivityIndicator/></View> :(
            <View style={{flex:1, flexDirection:'column',justifyContent:'space-between'}}>
                <View style={{margin:30}}>{LogoHeader()}</View>
                
                <Image source = {IMAGES.notification} resizeMode='contain' style={{width:'100%'}}/>
                <Text style={{fontSize:28, marginHorizontal:30,}} numberOfLines={2}>Ride easy with real time trip updates</Text>
                <Text style={{fontSize:13.4, marginHorizontal:30,}} numberOfLines={2}>Please enable push notifications from              uber when prompted</Text>
                {this._renderFooter()}
            </View>
        )
    }
}
