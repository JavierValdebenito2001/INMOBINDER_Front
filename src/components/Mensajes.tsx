import { useNavigation } from '@react-navigation/native';
import React,{ useState, useEffect, useLayoutEffect, useCallback} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AddHomeGalleryStyles } from '../screens/AddHome/Gallery/AddHomeGalleryStyles';
import { screen } from '../utils/ScreenName';
import Constants from 'expo-constants'
import { collection, addDoc, orderBy, query, onSnapshot, doc} from 'firebase/firestore';
import { firebase } from '../../firebase-config';
import { AntDesign } from '@expo/vector-icons';
import { GiftedChat } from 'react-native-gifted-chat';
import { auth } from '../../firebase-config';
import {signOut} from 'firebase/auth';

const Mensajes = () => {

    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();
    
    const onSignOut = () => {
        signOut(auth).catch((error) => console.log(error))};

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{marginRight: 20}} onPress={onSignOut}>
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
                )
            })}, [navigation]);

    useLayoutEffect(() => {
        const collectionRef = collection(firebase.firestore(), 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
    
        const unsubscribe = onSnapshot(q, (snapshot) => {
            console.log('snapshot');
            setMessages(snapshot.docs.map(doc => ({
                _id: doc.id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user
            })));
        });
    
        return () => unsubscribe(); // remember to unsubscribe on cleanup
    }, []);


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        
        const {_id, createdAt, text, user } = messages[0];
        addDoc(collection(firebase.firestore(), 'chats'),{
            _id,
            createdAt,
            text,
            user
        });
    }, []);

    function handleBack() {
        navigation.navigate(screen.account.MainDrawer);
    }

    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
            _id: auth.currentUser.uid,
            avatar:'https://i.pravatar.cc/300',
        }}
        messagesContainerStyle={{backgroundColor: '#FFF'}}
        
        />
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 50,
    },
    container2 : {
        marginTop: Constants.statusBarHeight,
        flex:1
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subcontainer: {
        height: 50,
        width: '100%',
        paddingVertical: 20,
        borderRadius: 100,
    },
    chat: {
        width: 400,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFFF',
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 5,
        borderColor: '#A9A9A9',
        position: 'relative',
    },
    InnerOval: {
        width: 250, // Ancho del óvalo interior
        height: 50, // Altura del óvalo interior
        backgroundColor: '#A9A9A9', // Color del óvalo interior
        borderRadius: 50, // Ajusta el valor para que sea la mitad del ancho o altura para que sea un óvalo
        justifyContent: 'center', // Alinea el texto al centro verticalmente
        alignItems: 'center',
        position: 'absolute', // Posiciona el óvalo interior en relación con el contenedor exterior
        top: 35, // Ajusta según tus necesidades para centrar verticalmente
        right: 25,
    },
    innerCircle: {
        width: 80,
        height: 80,
        backgroundColor: '#A9A9A9',
        borderRadius: 50,
        position: 'absolute',
        top: 20,
        left: 30,
    },
    messageText: {
        color: 'black', // Cambia el color del texto según tus necesidades
        fontSize: 16,
    },
    back: {
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1,
        flexDirection: 'row',
    },

    logoBack: {
        color: 'rgb(0,0,0)',
        marginRight: -10,
    },inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        marginRight: 10,
    },
    sendButton: {
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
});
export default Mensajes
