import * as firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8Lpsb7pIG47Y7AvAuacj3Nm5Nw6PLSeY",
  authDomain: "isabel-sousa.firebaseapp.com",
  projectId: "isabel-sousa",
  storageBucket: "isabel-sousa.appspot.com",
  messagingSenderId: "1088273050631",
  appId: "1:1088273050631:web:1d7e17a3ebcfbb4d98cea2",
  measurementId: "G-LR4N1HJ8YF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const db = getFirestore();

export { projectStorage, db };
