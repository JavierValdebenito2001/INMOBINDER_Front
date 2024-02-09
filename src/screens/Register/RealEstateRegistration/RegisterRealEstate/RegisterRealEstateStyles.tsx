import { StyleSheet } from "react-native";

export const styleRealEstate = StyleSheet.create({

    container:{
        width: "90%",
        height: "55%",
        borderRadius: 20,
        alignItems: "center",
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

    textRegister:{
        marginTop: '5%',
        fontSize: 28,
        color: 'rgb(9,27,43)',
    },

    textRegisterEmail:{
        fontSize: 16,
        width: '90%',
    },

    inputEmail:{
        width: "90%",
        height: 45,
        borderColor: 'rgb(152,152,152)',
        borderWidth: 1,
        marginTop: '5%',
    },

    text:{
        fontSize: 13,
        marginTop: '7%',
        width: '90%',
    },

    text1:{
        fontSize:13,
        textDecorationLine: "underline",
    },

    containerBtn:{
        marginTop: '10%',
    },

    btnStyle:{
        backgroundColor: 'rgb(9,27,43)',
        borderRadius: 10,
        width: 132,
        height: 45,

    },

    butonContainer:{
        width: 330,
    },

    textBtn:{
        color: 'rgb(255,255,255)',
        fontSize: 14,
    },



});