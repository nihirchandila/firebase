import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBz63tksd5IARsJhPR_-Dx1EPumpVlyB_4",
  authDomain: "fir-a7721.firebaseapp.com",
  projectId: "fir-a7721",
  storageBucket: "fir-a7721.appspot.com",
  messagingSenderId: "65559678530",
  appId: "1:65559678530:web:eb12efeaa449cf6dc3a7db"
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);