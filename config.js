import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCdEjn0h-Ph7rtY6vP0prlDs884tUUZN4U",
  authDomain: "ride-ebe2b.firebaseapp.com",
  projectId: "ride-ebe2b",
  storageBucket: "ride-ebe2b.appspot.com",
  messagingSenderId: "236075448940",
  appId: "1:236075448940:web:0bf25c71363d9b1587b649"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
