
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 import { initializeApp } from "@firebase/app";
 import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
 import { initializeAuth, getReactNativePersistence } from "@firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDNu2t52GgXHdOupTmYH3zDWwK7Jt0mhJs",
    authDomain: "agartha-marketing-agency.firebaseapp.com",
    databaseURL: "https://agartha-marketing-agency-default-rtdb.firebaseio.com",
    projectId: "agartha-marketing-agency",
    storageBucket: "agartha-marketing-agency.appspot.com",
    messagingSenderId: "122797123050",
    appId: "1:122797123050:web:ae329240af952befbebe93",
    measurementId: "G-GG1GQ69ZTH"
  };

  const firebase = initializeApp(firebaseConfig);

  export const auth = initializeAuth(firebase, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
                                      });