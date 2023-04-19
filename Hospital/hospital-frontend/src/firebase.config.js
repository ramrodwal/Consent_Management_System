import { initializeApp } from 'firebase/app'

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUxZvxglBnB2yTqmLLF2EzHBYSTHgUW-0",
  authDomain: "opt-verification-app-f5b7f.firebaseapp.com",
  projectId: "opt-verification-app-f5b7f",
  storageBucket: "opt-verification-app-f5b7f.appspot.com",
  messagingSenderId: "464405889041",
  appId: "1:464405889041:web:ffe4c1a4d70a145efcf1b0",
  measurementId: "G-B5EBCV5MHQ"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);