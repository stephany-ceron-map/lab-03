import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzT4Ck7gq0xDSpANWDlwove1C8nxpjU1o",
  authDomain: "test-4ec10.firebaseapp.com",
  databaseURL: "https://test-4ec10-default-rtdb.firebaseio.com",
  projectId: "test-4ec10",
  storageBucket: "test-4ec10.appspot.com",
  messagingSenderId: "137949969405",
  appId: "1:137949969405:web:69a47099e0cbd622d57794",
  measurementId: "G-GQPQ81WP3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);