import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDNu2t52GgXHdOupTmYH3zDWwK7Jt0mhJs",
    authDomain: "agartha-marketing-agency.firebaseapp.com",
    databaseURL: "https://agartha-marketing-agency-default-rtdb.firebaseio.com",
    projectId: "agartha-marketing-agency",
    storageBucket: "agartha-marketing-agency.appspot.com",
    messagingSenderId: "122797123050",
    appId: "1:122797123050:web:ae329240af952befbebe93"
  };

  // Initialize Firebase
         
// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);
// Inicializa Cloud Firestore y obtiene una referencia al servicio
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };

