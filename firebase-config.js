
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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

 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);}
  export {firebase}