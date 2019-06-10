import React, { Component } from 'react'
import {StyleSheet, View ,ActivityIndicator, Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default class AuthLoadingScreen extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        setTimeout(() => {
            
        }, 10000);
        return (
            <View style={styles.container}>
                <Text>Hello</Text>
                <ActivityIndicator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
});
