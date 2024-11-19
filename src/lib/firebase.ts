// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlZSTMSb57eKtOY_I2MQ3ySStYQxPdAbA",
    authDomain: "linko-52873.firebaseapp.com",
    projectId: "linko-52873",
    storageBucket: "linko-52873.appspot.com",
    messagingSenderId: "174174509554",
    appId: "1:174174509554:web:a73a31cafb917c0d7ef36b",
    measurementId: "G-9WZY918LT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };