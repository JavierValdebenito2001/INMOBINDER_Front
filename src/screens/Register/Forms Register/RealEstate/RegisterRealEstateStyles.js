import { StyleSheet } from "react-native";

export const styleRealEstate = StyleSheet.create({

    back:{
        flexDirection: "row",
        marginRight: "auto",
        marginTop: "15%",
        alignItems: "center",
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%',
    },

    container:{
        width: 310,
        height: 350,
        borderRadius: 20,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
        alignItems: "center",
        marginTop: '10%',
    },

    textRegister:{
        marginTop: '7%',
        fontSize: 28,
        color: 'rgb(9,27,43)',
        fontWeight: "bold",
    },

    textRegisterEmail:{
        fontSize: 16,
        fontWeight: "bold",
        color: 'rgb(0,0,0)',
        marginTop: '7%',
    },

    inputEmail:{
        width: "90%",
        height: 45,
        borderColor: 'rgb(152,152,152)',
        borderWidth: 1,
        marginTop: '7%',
    },

    text:{
        fontSize: 13,
        marginTop: '7%',
        fontWeight: "normal",
    },

    text1:{
        fontSize:12,
        fontWeight: "bold",
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
        fontWeight: "bold",
        fontSize: 14,
    },



});