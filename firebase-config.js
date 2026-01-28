import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjd3inwgVc8_WHaKosbBHIEYsnKUt8MTs",
  authDomain: "gaehub-40301.firebaseapp.com",
  databaseURL: "https://gaehub-40301-default-rtdb.firebaseio.com",
  projectId: "gaehub-40301",
  storageBucket: "gaehub-40301.appspot.com",
  messagingSenderId: "396028495020",
  appId: "1:396028495020:web:0df49ae2fcf1b53ff7cb09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);