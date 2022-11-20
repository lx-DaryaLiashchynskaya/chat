import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import " firebase/database";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyD00nZT9embtLdOMmHHQE9O_mUH1-cBS2w",
  authDomain: "chitchat-30232.firebaseapp.com",
  databaseURL: "https://chitchat-30232-default-rtdb.firebaseio.com",
  projectId: "chitchat-30232",
  storageBucket: "chitchat-30232.appspot.com",
  messagingSenderId: "910030530826",
  appId: "1:910030530826:web:65bc331f870df1248272f3",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const databaseRef = firebase.database().ref();
