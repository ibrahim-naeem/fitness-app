import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLFC30oe6PqByZ1tKwPlPZeCFVY8WsXQ8",
  authDomain: "pose-estimation-7d7aa.firebaseapp.com",
  projectId: "pose-estimation-7d7aa",
  storageBucket: "pose-estimation-7d7aa.appspot.com",
  messagingSenderId: "482125312593",
  appId: "1:482125312593:web:8ed84fd4d43373af563e70",
  measurementId: "G-XRX7RN6NBQ",
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



export { firebase, database, googleAuthProvider };