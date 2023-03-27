/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getFirestore, setDoc, doc } from "firebase/firestore";
import { StyleSheet } from 'react-native';
import { useRef, useState, useEffect } from "react";

// Define your Firebase config here
const config = {
  apiKey: "AIzaSyBweZYPLh5u8v4WAVEvCIbCM1NV6WqWpPY",
    authDomain: "responderapp-b12dd.firebaseapp.com",
    projectId: "responderapp-b12dd",
    storageBucket: "responderapp-b12dd.appspot.com",
    messagingSenderId: "1062872614107",
    appId: "1:1062872614107:web:dba809ec3ffab92d69b8fe",
    measurementId: "G-01Z8SFG290"
};

firebase.initializeApp(config); // Initialize Firebase

const firestore = firebase.firestore(); // Get Firestore instance
// const sendDataToFirebase = async ()=>{

  //  const  firestore = getFirestore();

//   await setDoc(doc(firestore, "users", "user_id"), {
//       phone: "0752090722",
//       name: "Tracy mukula",
//       age: 18
  
//   });
  

// }

// if (!firebase.app.length){
//    firebase.initializeApp(config)
// }

const NotificationScreen = () => {

  //const  firestore = getFirestore();

const [users, setUsers] = useState([]);
const todoRef = firebase.firestore().collection('toDos');

useEffect( () => {
  todoRef
  .onSnapshot(
    querySnapshot => {
      const users = []
      querySnapshot.forEach((doc) => {
        const {heading, text} = doc.data()
        users.push({
          id: doc.id,
          heading,
          text,
        })
      });
      setUsers(users)
    }

  )

}, [firestore])




// class NotificationScreen extends React.Component {
 


  // render() {
   // const {notifications} = this.state;

    return (
      // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      //   <Button title = 'Send Data' onPress={sendDataToFirebase}></Button>
      // </View>
      <View style ={{flex:1, marginTop:100}}>
        <FlatList
             style={{height:'100%'}}
             data={users}
             numColumns={1}
             renderItem={({item}) => (
              <Pressable
                    style={styles.container}
                    >
                      <View style={styles.innerContainer}>
                        <Text style={styles.itemHeading}>{item.Heading}</Text>
                        <Text style={styles.itemText}>{item.text}</Text>
                      </View>
                    </Pressable>
             )} 

             />
      </View>
    )
  // }
 }

export default NotificationScreen;


const styles = StyleSheet.create({
   container:{
    backgroundColor: '#e5e5e5',
    padding:15,
    borderRadius:15,
    margin:5,
    marginHorizontal:10,
   },
   innerContainer:{
    alignItems:'center',
    flexDirection: 'column',
   },
   itemHeading:{
    fontWeight:'bold'
   },
   itemText:{
    fontWeight:'300'
   }
})