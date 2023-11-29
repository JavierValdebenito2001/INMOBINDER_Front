import { StyleSheet } from "react-native";

export const styleRegister = StyleSheet.create({

    registerContainer: {
      width: 282,
      height: 350,
      borderRadius: 20,
      marginTop: '10%',
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
    registerText: {
      textAlign: "center",
      alignItems: "center",
      fontSize: 24,
      marginTop: '7%',
    },
    registerBtn: {
      backgroundColor: 'rgb(15, 5, 136)',
      width: 158,
      height: 40,
      shadowOpacity: 1,
      elevation: 4,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowColor: "rgba(0, 0, 0, 1)",
    },
    containerBtnRegister: {
      alignItems: "center",
      marginTop: '10%',
    },
    optionRegister: {
      fontSize: 14,
      color: 'rgb(255,255,255)',
      textAlign: "center",
    },
    optionRegisterText: {
      flex: 1,
      justifyContent: "center",
    },
    iconRegister: {
      fontSize: 20,
      color: 'rgb(255,255,255)',
      marginLeft: "auto",
    },
    footer: {
      marginTop: '10%',
      flexDirection: "row",
      justifyContent: 'center',
    },
  });