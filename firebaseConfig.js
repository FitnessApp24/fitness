import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAp3GFY2c52ALCL_UCyvRwmbYkVIQVlJtw",
  authDomain: "fitness-59609.firebaseapp.com",
  projectId: "fitness-59609",
  storageBucket: "fitness-59609.appspot.com",
  messagingSenderId: "1066707996271",
  appId: "1:1066707996271:web:326fea1d3fc488287a079a",
  measurementId: "G-42SMZ9DDZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app)