import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD00nZT9embtLdOMmHHQE9O_mUH1-cBS2w",
  authDomain: "chitchat-30232.firebaseapp.com",
  databaseURL: "https://chitchat-30232-default-rtdb.firebaseio.com",
  projectId: "chitchat-30232",
  storageBucket: "chitchat-30232.appspot.com",
  messagingSenderId: "910030530826",
  appId: "1:910030530826:web:65bc331f870df1248272f3",
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const db = getDatabase();
