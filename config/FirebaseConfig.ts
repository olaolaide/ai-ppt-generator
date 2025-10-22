// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA8s8L4_U8OVee4wbrCdiJ-R5GNNEcG5CA",
    authDomain: "auth-app-af385.firebaseapp.com",
    databaseURL: "https://auth-app-af385-default-rtdb.firebaseio.com",
    projectId: "auth-app-af385",
    storageBucket: "auth-app-af385.firebasestorage.app",
    messagingSenderId: "494302561369",
    appId: "1:494302561369:web:4e372b0b794a698c215d48",
    measurementId: "G-G4QJMF5CW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);