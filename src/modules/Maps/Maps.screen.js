import React, { Component } from 'react';
import { Image, View ,TextInput, Text, FlatList, StyleSheet} from 'react-native';
import {IMAGES} from '../../assets';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapsScreen extends Component {
    constructor(props){
        super(props);
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

    renderAddressSection = () => {
        return (
            <View>

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
            <View style={{marginHorizontal:30,
                marginVertical:12,flexDirection:'row'}}>
                <View style = {{width:13, height:13, backgroundColor:'black', marginHorizontal:22,marginTop:5,}}/>
                <View
                    style={{ flex:1,}}
                >
                    <Text style = {{fontSize: 16}}>
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
            <View style={{position: 'absolute',width:'100%',height:'100%',backgroundColor:'yellow'}}>
                <View style = {{marginHorizontal:30,alignItems:'center', backgroundColor:'white', flexDirection:'row'}}>
                    <View style = {{width:13, height:13, backgroundColor:'black', marginHorizontal:22, marginVertical:30}}/>
                    <TextInput placeholder="Where to ?"
                    style={{elevation: 1,
                        backgroundColor: 'white',
                        width: '90%',
                        height: '6%',
                        top: 40,
                        borderRadius: 3,
                        shadowOpacity: 0.75,
                        shadowRadius: 1,
                        shadowColor: 'gray',
                        shadowOffset: { height: 0, width: 0}}}></TextInput>
                </View>
                {this.renderAddressSection()}
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
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
