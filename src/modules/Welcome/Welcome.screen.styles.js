import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    welcomeImage: {
        width: "100%",
    },
    textSlogan: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textDescribe: {
        fontSize: 10,
    },
    touchableOpacity: {
        flexDirection:'row',
        backgroundColor: '#000000',
        borderRadius: 10,
        padding:10,
        paddingRight:20,
    },
    buttonText: {
        flex:1,
        textAlign:'center',
        color: 'white',
    },
    buttonArrow: {
        flex:1,
    }
});

export default styles;