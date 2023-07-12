import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXxPxTOISwg6R8B19ZkXKR1g-cMdCbyNw",
  authDomain: "chilldafaout.firebaseapp.com",
  projectId: "chilldafaout",
  storageBucket: "chilldafaout.appspot.com",
  messagingSenderId: "759403181879",
  appId: "1:759403181879:web:e73bd36d42f0e3ac024cb2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
