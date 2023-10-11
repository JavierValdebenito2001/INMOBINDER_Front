import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {     
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '25%',
    },
    containerButton: {
        marginTop: '15%',
        alignItems: 'center',       
      },
      containerImg:{
        justifyContent: "flex-end",
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '15%',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },
      btn: {
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(0,0,0)',
          borderWidth: 2,
          borderRadius: 40,
          width: 236,
          height: 70,
      },
      btnText: {
          color: 'rgb(0,0,0)',
          fontSize: 24,
          fontWeight: "bold",
          alignContent: "center",
      },
      btnContainer: {
          alignItems: "center",
          padding: 50,
      },
      img: {
          resizeMode: "center",
          width: 50,
          height: 50,
      },
      logoText: {
        color: 'rgb(0,0,0)',
        fontSize: 32,
        fontWeight: "bold",
      },
      logoImg: {
        resizeMode: 'center',
        width: 50,
        height: 50,
      },
      registerContainer: {
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
        width: 282,
        height: 301,
        borderRadius: 20,
        marginTop: '20%',
      },
      registerText: {
        textAlign: "center",
        alignItems: "center",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: '7%',
      },
      registerBtn: {
        backgroundColor: 'rgb(15, 5, 136)',
        width: 158,
        height: 30,
      },
      containerBtnRegister: {
        alignItems: "center",
        marginTop: '10%',
        
      },
      optionRegister: {
        fontSize: 14,
        fontWeight: "bold",
        color: 'rgb(255,255,255)',
        textAlign: "center",
      },
      footer: {
        marginTop: '10%',
        flexDirection: "row",
        justifyContent: 'center',
      },
      iconRegister: {
        fontSize: 15,
        color: 'rgb(255,255,255)',
        marginLeft: "auto",
      },
      optionRegisterText:{
        flex: 1,
        justifyContent: "center",
      },
      textLogin: {
        fontWeight: "900",
      },

});