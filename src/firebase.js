import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIXDTUCUFRuXv2V6vlPelsuv8LrbzrJJM",
    authDomain: "themovieproject-d3942.firebaseapp.com",
    projectId: "themovieproject-d3942",
    storageBucket: "themovieproject-d3942.appspot.com",
    messagingSenderId: "74255978326",
    appId: "1:74255978326:web:d91bb084c1902cd754d0f7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;