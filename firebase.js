// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChdaw1bpoDurQNtyP124Zogm7VJWr7rbw",
  authDomain: "login-92d3d.firebaseapp.com",
  projectId: "login-92d3d",
  storageBucket: "login-92d3d.appspot.com",
  messagingSenderId: "818786784220",
  appId: "1:818786784220:web:de33f2774a97e2f1483519",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export { auth };
