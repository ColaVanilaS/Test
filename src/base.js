import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpbzUAu0pO7MUfJqUJwrWRTVTiehvsUR4",
  authDomain: "very-hot-burgers-3b526.firebaseapp.com",
  databaseURL:
    "https://very-hot-burgers-3b526-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
