import { StyleSheet } from "react-native";

export const styleIndependient = StyleSheet.create({

    back:{
        flexDirection: "row",
        marginRight: "auto",
        marginTop: "15%",
        alignItems: "center",
    },

    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
    },

    form:{
        width: "90%",
        marginTop: '5%',    
        marginBottom: '35%',
    },

    textRegister: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: "1%",
        textAlign: "center",
    },
    footer:{
        alignItems: "center",
        marginTop: '10%',
    },

    btn:{
        backgroundColor: 'rgb(9,27,43)',
        width: 161,
        height: 59,
        borderRadius: 10,
    },

    textBtn: {
        color: 'rgb(255,255,255)',
        fontWeight: "bold",
        fontSize: 14,
    },

    input: {
        borderColor: 'rgb(152,152,152)',
        borderWidth: 1,
        width: '90%',
        height: 45,
        marginTop: "3%",
    },

    titulo: {
        fontSize: 20,
        marginTop: "5%",
    },

    scrollStyle: {
        justifyContent: 'center',
         alignItems: 'center',
    },




});
