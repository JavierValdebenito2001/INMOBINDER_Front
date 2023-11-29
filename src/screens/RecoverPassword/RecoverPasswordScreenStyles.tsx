import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";



export const styleRecoverPassword = StyleSheet.create({
    container:{
        alignItems: 'center',
        width: "90%",
        height: "70%",
        borderRadius: 20,
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowColor: "rgba(0, 0, 0, 1)",
        backgroundColor: 'rgb(255, 255, 255)',
    },

    title:{
        fontSize: 24,
        marginTop: '5%',
    },

    text1:{
        fontSize: 12,
        marginTop: '5%',
    }

  

});
