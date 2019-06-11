import React from 'react';
import { Text,TouchableOpacity} from 'react-native';

const SkipHeader = (props) => (
    <TouchableOpacity 
    onPress = {props.onPress} 
    style = {{height:84,alignSelf:'baseline'}}>
        <Text style={{padding:30, fontSize:18}}>Skip here</Text>
    </TouchableOpacity>
);

export default SkipHeader;