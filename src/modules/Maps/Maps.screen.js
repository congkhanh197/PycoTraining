import React, { Component } from 'react'
import { Image, View ,TextInput, Text, FlatList} from 'react-native'
import {IMAGES} from '../../assets'

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
            <View style={{
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
            <View style={{margin:30,backgroundColor:'yellow'}}>
                <View style = {{alignItems:'center', backgroundColor:'white', flexDirection:'row'}}>
                    <View style = {{width:13, height:13, backgroundColor:'black', marginHorizontal:22, marginVertical:30}}/>
                    <TextInput placeholder="Where to ?"
                    style={{flex:1, height:50, marginVertical: 21, marginRight:17}}></TextInput>
                </View>
                {this.renderAddressSection()}
                
            </View>
        )
    }
}
