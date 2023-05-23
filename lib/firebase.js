
// OLD SDK VERSION

// import firebase from 'firebase/app';
// import { initializeApp, getApps } from "firebase/app"
// import 'firebase/firestore';
// import 'firebase/storage';

// const firebaseConfig = {
//   // Insérez vos clés de configuration Firebase ici
//   apiKey: "AIzaSyC-_xzyee79hp1UODAxOW4pD6V2RB7FK44",
//   authDomain: "app-final-6b9bc.firebaseapp.com",
//   projectId: "app-final-6b9bc",
//   storageBucket: "app-final-6b9bc.appspot.com",
//   messagingSenderId: "376106900180",
//   appId: "1:376106900180:web:2ea32ad1129bab9377b941",
// };

// if (!getApps().length) {
//   // initializeApp(firebaseConfig);
//   const app = initializeApp(firebaseConfig)
// }

// const db = firebase.firestore();
// const storage = firebase.storage();

// export { firebase, db, storage };




// NEW SDK VERSION

// import { initializeApp, getApps } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   // Insérez vos clés de configuration Firebase ici
//   apiKey: "AIzaSyC-_xzyee79hp1UODAxOW4pD6V2RB7FK44",
//   authDomain: "app-final-6b9bc.firebaseapp.com",
//   projectId: "app-final-6b9bc",
//   storageBucket: "app-final-6b9bc.appspot.com",
//   messagingSenderId: "376106900180",
//   appId: "1:376106900180:web:2ea32ad1129bab9377b941",
// };

// if (!getApps().length) {

// }
//   const app = initializeApp(firebaseConfig)

//   const db = getFirestore(app)
//   const auth = getAuth(app)

// export {firebase, db, auth}








// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDQBVvdPsVLWfXopMfVspPSNByNKZx0f8",
  authDomain: "movie-app-af893.firebaseapp.com",
  projectId: "movie-app-af893",
  storageBucket: "movie-app-af893.appspot.com",
  messagingSenderId: "225687832028",
  appId: "1:225687832028:web:0de4006b30a77967af7b19"
};


if (!getApps().length) {

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getFirestore(app)
const auth = getAuth(app);

export { auth, storage } ;