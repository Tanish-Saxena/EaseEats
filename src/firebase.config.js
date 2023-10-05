import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBXalJkZD9mLktdEy65ck6oWWTwebWxrg",
  authDomain: "eatsease-82973.firebaseapp.com",
  databaseURL: "https://eatsease-82973-default-rtdb.firebaseio.com",
  projectId: "eatsease-82973",
  storageBucket: "eatsease-82973.appspot.com",
  messagingSenderId: "586869036651",
  appId: "1:586869036651:web:d5c8e00ceef574ce37c32e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);


export {app,firestore,storage};