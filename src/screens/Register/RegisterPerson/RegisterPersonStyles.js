import { StyleSheet } from "react-native";

export const stylePerson = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center',
    },

    registerContainer:{
        width: 356,
        height: 447,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 2,
        marginTop: "10%",
        borderRadius: 20,
        alignItems: "center",
    },

    registerText:{
        marginTop: '5%',
        color: 'rgb(9,27,43)',
        fontSize: 28,
        fontWeight: "bold",

    },

    Img:{
        width: 24,
        height: 24,
    },

    GoogleText:{
        fontSize: 20,
        fontWeight: "bold",

    },

    registerGoogle:{
        flexDirection: "row",
        marginTop: "7%",
        width: 300,
        height: 28,
        borderRadius: 40,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
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

    separator:{
        borderBottomWidth: 1, 
        borderColor: 'rgb(152,152,152)',    
        width: '90%',
        marginTop: '7%',
    },

    textRegisterEmail:{
        fontSize: 16,
        fontWeight: "bold",
        marginTop: '7%',
    },

    inputRegisterEmail:{
        width: "90%",
        height: 45,
        marginTop: '7%',
        borderColor: 'rgb(152,152,152)',
        borderWidth: 1,
    },

    btnContinuer:{
        backgroundColor: 'rgb(9,27,43)',
        borderRadius: 10,
        width: 132,
        height: 45,
        marginTop: '10%',
        marginLeft: '50%'
    },

    textBtn:{
        color: 'rgb(255,255,255)',
        fontWeight: "bold",
        fontSize: 14,
    }







});