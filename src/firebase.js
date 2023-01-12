import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";

const config = {
    apiKey: "AIzaSyDMk9o7e6UX0i16rlO7tm_nK-TS_B5BOvE",
    authDomain: "react-blog-demo-a519d.firebaseapp.com",
    projectId: "react-blog-demo-a519d",
    storageBucket: "react-blog-demo-a519d.appspot.com",
    messagingSenderId: "963832125001",
    appId: "1:963832125001:web:fcb36a168cbd453a705198",
    measurementId: "G-HWNGBY3ZMH"
};
firebase.initializeApp(config);

export default firebase;