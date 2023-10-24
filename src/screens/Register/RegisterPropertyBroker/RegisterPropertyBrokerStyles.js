import { StyleSheet } from "react-native";

export const styleProperty = StyleSheet.create({

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

    containerOption: {
        width: 330,
        height: 450,
        borderRadius: 20,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
        marginTop: '10%',
        alignItems: "center",
    },

    textRegister:{
        marginTop: '5%',
        fontSize: 28,
        color: 'rgb(9,27,43)',
        fontWeight: "bold",
    },

    textRegisterEmail:{
        fontSize: 16,
        fontWeight: "bold",
        color: 'rgb(0,0,0)',
        marginTop: '5%',
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
        fontWeight: "normal",
    },

    text1:{
        fontSize:12,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },

    textOptionTitle:{
        fontSize: 14.5,
        fontWeight: "bold",
        marginTop: '5%',
    },

    containerCheckBox:{
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "space-between",
        marginTop: "1%",
        
    },

    textCheck:{
        fontSize: 16,
        fontWeight: "bold",  
        marginLeft: "auto",
    },

    containerBtn:{
        marginTop: '5%',
        marginLeft: "55%",
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