// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
import { exp } from "react-native-reanimated";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3NyxUsZlFecmrRmYA4U0kWf_4oXaXwMw",
  authDomain: "foodblu-bce78.firebaseapp.com",
  projectId: "foodblu-bce78",
  storageBucket: "foodblu-bce78.appspot.com",
  messagingSenderId: "855875874032",
  appId: "1:855875874032:web:7b24b5d71e54705ebe6635"
};

// Initialize Firebase
let app;
if(firebase,app.length === 0) {

    app =  initializeApp(firebaseConfig);
} else  {
    app = firebase.app();
}

export { auth };