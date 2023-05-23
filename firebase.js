import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  // Insérez vos clés de configuration Firebase ici
  apiKey: "AIzaSyC-_xzyee79hp1UODAxOW4pD6V2RB7FK44",
  authDomain: "app-final-6b9bc.firebaseapp.com",
  projectId: "app-final-6b9bc",
  storageBucket: "app-final-6b9bc.appspot.com",
  messagingSenderId: "376106900180",
  appId: "1:376106900180:web:2ea32ad1129bab9377b941",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, db, storage };
