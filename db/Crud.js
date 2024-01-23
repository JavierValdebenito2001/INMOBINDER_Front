import { collection, getDocs, doc, setDoc,addDoc } from 'firebase/firestore';
import {db, auth }from "./Firebase.js"//connect a firestore y firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';//crear user

// Función methodo get con Firestore
export const FindLista = async (params) => {
  if (params && params.id_I) {
    const docRef = doc(db, "User", params.id_I);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("datos del documento:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("no se encontro documentos!");
    }
  }else{

    try {
      const collectionRef = collection(db, 'User'); // Cambia 'tuColeccion' por el nombre de tu colección
      const querySnapshot = await getDocs(collectionRef);

      // iteramos por datos
      const resultados = [];
      querySnapshot.forEach(doc => {
        resultados.push({ id_I: doc.id, ...doc.data() });
      });
      console.log('Operación completada exitosamente');
      return resultados;
    } catch (error) {
      console.error('Error al realizar la operación en Firestore:', error);
      throw error; // Puedes manejar el error según tus necesidades
    }

  }
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>+
// Función methodo post con Firestore CREAR COLECCION
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>+
export const Create = async (params) => {
  const valor = localStorage.getItem('id_I');
  const id_I = valor ? JSON.parse(valor) : null;

  // Itera sobre los datos y agrega a Firebase
for (const documento of params) {
  try {
      // Agrega un nuevo documento a la colección "user"
      const nuevoUsuarioRef = await db.collection('User').add(documento);
      // Obtén el ID del nuevo documento creado
      const idUsuario = nuevoUsuarioRef.id;
      // Crea la subcolección "gest" dentro del nuevo documento
      const gestRef = await db.collection('user').doc(idUsuario).collection('gest').add({
        sale: documento.gest.sale,
        rent: documento.gest.rent,
        buys: documento.gest.buys
      });
  
      console.log('Nuevo documento y subcolección "gest" creados exitosamente:', idUsuario, gestRef.id);
   

  } catch (error) {
    console.log("no se pudo registra");
    
  }

}

  };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>+
// Función methodo post con Firestore update COLECCION
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>+

export const edit = (params) => {
    return [...items, newItem];
  };

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>+
// Función methodo post con Firestore delet  por id
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>+

export const distroy = (params) => {
    
  };


export const gredenc = (pa) => {
  createUserWithEmailAndPassword(auth,pa.mail,pa.pasw)
  .then((userCredential) => {
    // La creación de usuario fue exitosa
    const user = userCredential.user;
    const userId = user
    localStorage.setItem('id_I', JSON.stringify(userId))
    console.log('Usuario creado con éxito:', user.uid);
  })
  .catch((error) => {
    // Hubo un error al crear el usuario
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error al crear usuario:',  errorMessage);
  });
  };


/*   uid: El ID único del usuario.
  displayName: El nombre que el usuario ha configurado en su perfil.
  email: La dirección de correo electrónico del usuario.
  emailVerified: Un booleano que indica si la dirección de correo electrónico del usuario ha sido verificada.
  photoURL: La URL de la foto de perfil del usuario.
  providerId: El proveedor de autenticación que se utilizó
   para iniciar sesión (por ejemplo,
  "password" para autenticación con correo electrónico y contraseña).
 */