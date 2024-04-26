import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIOSQz9T0jJ6IzJRzQHbTwGusUruBI5c",
  authDomain: "explorex-c0add.firebaseapp.com",
  projectId: "explorex-c0add",
  storageBucket: "explorex-c0add.appspot.com",
  messagingSenderId: "511126428627",
  appId: "1:511126428627:web:807b56737cc009859dad26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;