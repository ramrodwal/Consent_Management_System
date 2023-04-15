import { initializeApp } from 'firebase/app'

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBx134kWlrQ94bGX5jM-uK3REk_T78dqA",
    authDomain: "otp-verification-608a0.firebaseapp.com",
    projectId: "otp-verification-608a0",
    storageBucket: "otp-verification-608a0.appspot.com",
    messagingSenderId: "212864776939",
    appId: "1:212864776939:web:471781eebf9d2f9c385cae",
    measurementId: "G-SW23QXENXM"
};
const app=initializeApp(firebaseConfig);
export const auth = getAuth(app);