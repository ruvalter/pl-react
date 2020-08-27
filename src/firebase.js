import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyC9JhGXCWFVoPRJzn_FTcnDeWUX-K3ImNk",
    authDomain: "portugues-ludico.firebaseapp.com",
    databaseURL: "https://portugues-ludico.firebaseio.com",
    projectId: "portugues-ludico",
    storageBucket: "portugues-ludico.appspot.com",
    messagingSenderId: "121330762647",
    appId: "1:121330762647:web:cb79b68c257610ebecbad2"
  }

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export const auth = firebase.auth();