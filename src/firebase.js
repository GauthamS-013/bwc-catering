import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIu68z4wGt3o0k5T_hi7mg-fzBnXsbAx8",
    authDomain: "feast-fables-5f1e7.firebaseapp.com",
    projectId: "feast-fables-5f1e7",
    storageBucket: "feast-fables-5f1e7.appspot.com",
    messagingSenderId: "114415197159",
    appId: "1:114415197159:web:3d92a40e4c84e09363bb42"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const  db = firebase.firestore()