import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageRegister:{
        flex:1,
        overflow: 'hidden',
        width:'100%',
    },
    textTittle:{
        paddingHorizontal:30,
        marginTop: 38.5,
        fontSize: 25,
        color:"#353B50"
    },

    textPhoneArea:{
        flex:1,
        paddingLeft:20,
        textAlign: 'center',
    },
    inputPhone:{
        marginLeft:40,
        flex:6,
        height: 53,
        fontSize:15,
        textAlign: 'center',
        borderWidth:1,
        borderColor:"#000000"
    },
    textLinkSocial:{
        marginLeft: 30,
        marginBottom: 30,
        color:'#2697AC',
        fontSize: 15,
    }
})


export default styles;