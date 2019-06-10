import React, { Component } from 'react'
import { View ,Text, FlatList, ImageBackground} from 'react-native'
import {IMAGES} from '../../assets'

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
                image:"",
                title:"Grandiose Restaurant",
                address:"Airport Road Khilkhet,1229",
            },{
                image:"",
                title:"Test Restaurant",
                address:"Airport Road Khilkhet,1229",
            },{
                image:"",
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

    renderTextTittle= ()=>{
        return(
            <Text>Where would you want to go !</Text>
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
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <View style={{width: 20,height:20, backgroundColor:'black'}}/>
            <View>
                <Text>{item.title}</Text>
                <Text>{item.address}</Text>
            </View>
        </View>
    )

    
    renderNearByRestaurant = ()=>(
        <View>
            <Text>Nearby Restaurants</Text>
            <FlatList
                horizontal= {true}
                data = {this.nearByRestaurant}
                keyExtractor = {(item)=>item.title}
                renderItem = {this.renderNearByRestaurantItem}/>
        </View>
    )
    renderNearByRestaurantItem = ({item})=>(
        <View>
            <ImageBackground style = {{margin:10,width:200,height:100}} source={IMAGES.notification}>
                <Text>{item.title}</Text>
                <Text>{item.address}</Text>
            </ImageBackground>
        </View>
    )
    renderNearByFriend = ()=>(
        <View>
            <Text>Friend nearby you</Text>
            <FlatList
                horizontal= {true}
                data = {this.nearByFriend}
                keyExtractor = {(item)=>item.firstname}
                renderItem = {this.renderNearByFriendItem}/>
        </View>
    )
    renderNearByFriendItem = ({item})=>(
        <View style={{margin:20}}>
            <View style={{width:30,height:30, backgroundColor:'black'}}/>
            <Text>{item.firstname}</Text>
            <Text>{item.address+" "+item.ages}</Text>
        </View>
    )

    renderTabNavigator = ()=>(
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{width:15, height:15, backgroundColor:'black'}}/>
            <View style={{width:15, height:15, backgroundColor:'black'}}/>
            <View style={{width:15, height:15, backgroundColor:'black'}}/>
            <View style={{width:15, height:15, backgroundColor:'black'}}/>
            <View style={{width:15, height:15, backgroundColor:'black'}}/>
        </View>
    )

 
    render() {
        return (
            <View>
                <View style={{marginLeft:30}}>
                    {this.renderTextTittle()}
                    {this.renderListAddress()}
                    {this.renderNearByRestaurant()}
                    {this.renderNearByFriend()}
                </View>
                {this.renderTabNavigator()}
            </View>
            
        )
    }
}
