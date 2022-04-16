// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuQVG6X-iosgZiNEL6YsW3U8dX83wG1G4",
    authDomain: "independent-service-prov-438c6.firebaseapp.com",
    projectId: "independent-service-prov-438c6",
    storageBucket: "independent-service-prov-438c6.appspot.com",
    messagingSenderId: "924324617032",
    appId: "1:924324617032:web:3f4489fdb0eebd8426f17d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;