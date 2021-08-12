import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyBmFG3u4QA89anUwLVHNKF7N_5T0tqoouU",
  authDomain: "skcript-final.firebaseapp.com",
  projectId: "skcript-final",
  storageBucket: "skcript-final.appspot.com",
  messagingSenderId: "508632451426",
  appId: "1:508632451426:web:87c9517791ae18ef5b043b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };