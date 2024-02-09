import { StyleSheet } from "react-native";

export const styleIndependient = StyleSheet.create({

containerOption: {
    width: '92%',
    height: '70%',
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
    fontSize: 25,
    textDecorationLine: 'underline',
},

titulo: {
    fontSize: 20,
    marginTop: "2%",
    width: "80%",
},
containerbtnarchivo:{
    flexDirection: "row",
    alignItems: "center", 
    marginTop: "2%",
    width: "80%",
},

containerBtn:{
    alignItems: "center",
},
btnStyle:{
    backgroundColor: 'rgba(217, 217, 217, 1)',
    justifyContent: 'center',   
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(152, 152, 152, 1)',
},
textBtn:{
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 12,
},
textContainer: {
    justifyContent: 'center', 
    fontSize: 12,
    color: 'rgba(152, 152, 152, 1)',
    marginLeft: "3%",   
},
contenttext:{
    marginTop: '2%',
    width: '80%',
},
text:{
    textAlign: 'left',
    fontFamily: 'Cairo_400Regular',
    color: 'rgba(152, 152, 152, 1)',
    fontSize: 11,
},
containerbtns:{
    flexDirection: "row",
    alignItems: "center", 
    marginTop: "5%",
    width: "80%",
    justifyContent: 'space-between',
},
containerBtn2:{
    alignItems: "center",
},
textOmitir:{
    fontSize: 20,
    fontFamily: 'Cairo_700Bold',
},
btnStyle2:{
    backgroundColor: 'rgb(9,27,43)',
    borderRadius: 10,
    width: 100, 
    justifyContent: "center",
    borderWidth: 1,
    borderColor: 'rgba(152, 152, 152, 1)',
},
textBtn2:{
    color: 'rgb(255,255,255)',
    fontSize: 17,
},
header:{
    flexDirection: 'row',
    alignItems: 'center',
},
imgLogo: {
    marginTop: '70%',
    resizeMode: 'center',
    width: 100,
    height: 100,
},
});