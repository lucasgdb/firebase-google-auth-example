// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVmWsJ_iIzgOo2oCs9LmkqHSIGyr6c2bk",
  authDomain: "auth-example-72452.firebaseapp.com",
  projectId: "auth-example-72452",
  storageBucket: "auth-example-72452.appspot.com",
  messagingSenderId: "1067865629857",
  appId: "1:1067865629857:web:4e995bf9fd8c249aeefce0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
