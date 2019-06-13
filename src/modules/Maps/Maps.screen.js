import React, { Component } from 'react';
import { Image, View ,TextInput, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../assets';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default class MapsScreen extends Component {
    constructor(props){
        super(props);
        this.userData = this.props.navigation.getParam('userData', null)
        this.savedAddresses = [
            {
              icon: '',
              title: 'Bdlive24.com',
              address: 'Hourse 57, road-8, Block-D, niketon, Gulshan'
            },
            {
              icon: '',
              title: 'Daffodil internationalUniversity',
              address: 'Mirpur Rd, Dhanmondi 32 Bustop'
            }
        ];
      
    }
    _onPress=()=>{
        this.props.navigation.navigate('Discovery',{
            userData:this.userData
        })
    }
    
    _onLogOut = async () => {
        console.log('logout');
        try {
            await AsyncStorage.setItem('userToken', null)
            console.log('done')
        } catch (e) {
            // saving error
        }
    }
    

    _onPressProfile = ()=>{
        this.props.navigation.navigate('Auth')
        this._onLogOut()
    }

    _renderHeader = ()=>{
        return(
            <View style = {{height: 90,flexDirection:'row', justifyContent:'space-between',
            backgroundColor:'rgba(0,0,0,0)'}}>
                <Image style={{margin:30,height:35,width:107}} resizeMode='contain' source={IMAGES.logo}/>
                <TouchableOpacity onPress ={this._onPressProfile}>
                    <Image style={{margin:30,width:35,height:35}} resizeMode='cover' source={IMAGES.profile_small}/>

                </TouchableOpacity>
                </View>
        )
    }

    renderAddressSection = () => {
        return (
            <View style={{marginHorizontal:30, backgroundColor:'white',borderBottomEndRadius:6,
            borderBottomStartRadius:6}}>

            <FlatList
                vertical
                data={this.savedAddresses}
                renderItem={this.renderAddressItem}
                keyExtractor={(item) => item.title}
            />
            </View>
        );
    };
    
    renderAddressItem = ({ item }) => {
        return (
            <View style={{marginVertical:12,flexDirection:'row'}}>
                <View style = {{width:16, height:16, marginHorizontal:20,marginTop:5,}}>
                    <Image resizeMode='cover' source={IMAGES.location}/>
                </View>
                <View
                    style={{ flex:1,}}
                >
                    <Text style = {{color:'black',fontSize: 16}}>
                    {item.title}
                    </Text>
                    <Text style={{fontSize:13}}>
                    {item.address}
                    </Text>
                </View>
            </View>
        );
    };
 
    render() {
        return (
            <View style = {{flex:1}}>
                {this._renderHeader()}
                <View style={{flex:1,backgroundColor:'green'}}>
                    <View style={styles.container}>
                        <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        zoomEnabled={true}
                        scrollEnabled={true}
                        >
                        </MapView>
                    </View>

                    <View>
                        <View style = {{marginHorizontal:30, 
                            alignItems:'center', backgroundColor:'white', 
                            elevation:10, flexDirection:'row'}}>
                            <TouchableOpacity onPress ={this._onPress}>
                                <View style = {{flex:0, width:13, height:13,
                                 backgroundColor:'black', marginHorizontal:22, marginVertical:30}}/>
                            </TouchableOpacity>
                            <TextInput placeholder="Where to ?"
                            style={{flex:1, marginRight:22, backgroundColor: 'white', elevation: 1,}}/>
                        </View>
                        {this.renderAddressSection()}
                    </View>                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
