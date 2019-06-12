import React, { Component } from 'react'
import { View ,Text, FlatList, ImageBackground,ScrollView,SafeAreaView} from 'react-native'
import {IMAGES} from '../../assets'

import ArrowLeftHeader from '../navigation/headers/ArrowLeft.header'
export default class GenderScreen extends Component {
    constructor(props){
        super(props);
        this.savedAddresses=[
            {
                icon:"",
                title:"Office",
                address:"BDlive24,Road 8 Niketon, gulshan, 1000",

            },{
                icon:"",
                title:"Home",
                address:"BDlive24,Road 8 Niketon, gulshan, 1000",
            }

        ];
        this.nearByRestaurant=[
            {
                image:IMAGES.retaurant.food1,
                title:"Grandiose Restaurant",
                address:"Airport Road Khilkhet,1229",
            },{
                image:IMAGES.retaurant.food2,
                title:"Test Restaurant",
                address:"Airport Road Khilkhet,1229",
            },{
                image:IMAGES.retaurant.food3,
                title:"Test 2 Restaurant",
                address:"Airport Road Khilkhet,1229",
            }
        ];
        this.nearByFriend=[
            {
                avatar:"",
                firstname:"Smirk",
                address:"Dhanmondi",
                ages:32
            },{
                avatar:"",
                firstname:"Rayhan",
                address:"Dhanmondi",
                ages:32
            },{
                avatar:"",
                firstname:"Farhana",
                address:"Dhanmondi",
                ages:32
            },
            {
                avatar:"",
                firstname:"Demo",
                address:"Dhanmondi",
                ages:32
            }
        ]
    };

        
    _onClickBack = ()=>{
        this.props.navigation.goBack();
    }

    renderHeader = ()=>{
        return (
            <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:5}}>
                {ArrowLeftHeader({onPress: this._onClickBack})}
            </View>
        )
    }

    renderTextTittle= ()=>{
        return(
            <Text style={{color:'black',fontSize:24,marginBottom:7}}>Where would you want to go !</Text>
        )
    }

    renderListAddress = ()=>(
        <View>
            <FlatList
            keyExtractor = {(item, index) => item.title}
            data={this.savedAddresses}
            renderItem = {this.renderAddressItem}/>
        </View>
    );
    renderAddressItem = ({item})=> (
        <View style={{marginBottom:4, flexDirection:'row', alignItems:'center'}}>
            <View style={{marginRight:7, width: 33,height:33, borderRadius:5, backgroundColor:'#d5dce0'}}/>
            <View>
                <Text style={{fontSize:18, color:'black'}}>{item.title}</Text>
                <Text style={{fontSize:13.4, color:'#858585'}}>{item.address}</Text>
            </View>
        </View>
    )

    
    renderNearByRestaurant = ()=>(
        <View>
            <Text style={{fontSize:18,color:'black',marginTop:7}}>Nearby Restaurants</Text>
            <FlatList
                horizontal= {true}
                data = {this.nearByRestaurant}
                keyExtractor = {(item)=>item.title}
                renderItem = {this.renderNearByRestaurantItem}/>
        </View>
    )
    renderNearByRestaurantItem = ({item})=>(
        <View>
            <ImageBackground style = {{marginRight:15,marginTop:10,marginBottom:15,width:300,height:156,
                borderRadius:10,overflow: 'hidden',backgroundColor:'#f8f8f8',elevation:10}} source={item.image}>
                <View style={{flex:1,justifyContent:'flex-end', marginLeft:19, marginBottom:15}}>
                    <Text style={{fontSize:18,color:'white'}}>{item.title}</Text>
                    <Text style={{fontSize:14,marginTop:4,color:'white'}}>{item.address}</Text>
                </View>
            </ImageBackground>
        </View>
    )
    renderNearByFriend = ()=>(
        <View style={{height:210}}>
            <Text style={{fontSize:18,color:'black'}}>Friend nearby you</Text>
            <FlatList
                horizontal= {true}
                data = {this.nearByFriend}
                keyExtractor = {(item)=>item.firstname}
                renderItem = {this.renderNearByFriendItem}/>
        </View>
    )
    renderNearByFriendItem = ({item})=>(
        <View style = {{width:120,height:160,marginRight:15,marginBottom:15,marginTop:7,
            borderRadius:7,backgroundColor:'white',elevation:5}}>
            <View style={{marginTop: 15, marginLeft:15, borderRadius:5 ,width:34,height:34, backgroundColor:'#d5dce0'}}/>
            <Text style={{marginLeft:15, marginTop:23,
                color:'black', fontSize:18}}>{item.firstname}</Text>
            <Text style={{marginLeft:15, marginTop:5, fontSize:13.4}}>{item.address+" "+item.ages}</Text>
            
            
        </View>
    )

    renderTabNavigator = ()=>(
        <View style={{height: 50, width:'100%',flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <View style={{width:30, height:30, borderRadius:5, backgroundColor:'#7ac4ef'}}/>
            <View style={{width:30, height:30, borderRadius:5, backgroundColor:'#7ac4ef'}}/>
            <View style={{width:30, height:30, borderRadius:5, backgroundColor:'#7ac4ef'}}/>
            <View style={{width:30, height:30, borderRadius:5, backgroundColor:'#7ac4ef'}}/>
            <View style={{width:30, height:30, borderRadius:5, backgroundColor:'#7ac4ef'}}/>
        </View>
    )

 
    render() {
        return (
            <View style={{flexDirection:'column',justifyContent:'space-between'}}>
                {this.renderHeader()}
                <ScrollView style={{marginLeft:30}}>
                    {this.renderTextTittle()}
                    {this.renderListAddress()}
                    {this.renderNearByRestaurant()}
                    {this.renderNearByFriend()}
                </ScrollView>
                {this.renderTabNavigator()}
            </View>
        )
    }
}
