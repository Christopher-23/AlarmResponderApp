import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBweZYPLh5u8v4WAVEvCIbCM1NV6WqWpPY",
    authDomain: "responderapp-b12dd.firebaseapp.com",
    projectId: "responderapp-b12dd",
    storageBucket: "responderapp-b12dd.appspot.com",
    messagingSenderId: "1062872614107",
    appId: "1:1062872614107:web:dba809ec3ffab92d69b8fe",
    measurementId: "G-01Z8SFG290"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
