// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDMk9o7e6UX0i16rlO7tm_nK-TS_B5BOvE",
    authDomain: "react-blog-demo-a519d.firebaseapp.com",
    projectId: "react-blog-demo-a519d",
    storageBucket: "react-blog-demo-a519d.appspot.com",
    messagingSenderId: "963832125001",
    appId: "1:963832125001:web:fcb36a168cbd453a705198",
    measurementId: "G-HWNGBY3ZMH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;