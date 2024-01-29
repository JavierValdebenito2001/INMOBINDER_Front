import { StyleSheet } from "react-native";

export const styleProperty = StyleSheet.create({

    containerOption: {
        width: "90%",
        height: "70%",
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
        fontSize: 30,
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
    },

    text1:{
        fontSize:13,
        textDecorationLine: "underline",
    },

    textOptionTitle:{
        fontSize: 15,
        marginTop: '5%',
    },

    containerCheckBox:{
        flexDirection: "row",
        alignItems: "center", 
        marginTop: "1%",
        
    },

    textCheck:{
        fontSize: 16,
        marginLeft: "auto",
    },

    containerBtn:{
        alignItems: "center",
    },

    btnStyle:{
        backgroundColor: 'rgb(9,27,43)',
        borderRadius: 10,
        width: 100,
        height: 40,
        justifyContent: "center",   

    },

    butonContainer:{
        width: 330,
    },

    textBtn:{
        color: 'rgb(255,255,255)',
        fontSize: 14,
    },






});