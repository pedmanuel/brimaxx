import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  
  apiKey: "AIzaSyCeEpufOUxd0JcIkLq3gkALcxe9TaZAXYA",
  authDomain: "ecommerce-e8107.firebaseapp.com",
  projectId: "ecommerce-e8107",
  storageBucket: "ecommerce-e8107.appspot.com",
  messagingSenderId: "378609823841",
  appId: "1:378609823841:web:d0017a8b457e96e7b77a20"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth= firebase.auth(); 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
