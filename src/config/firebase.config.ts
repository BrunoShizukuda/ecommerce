
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB1-q1azWIv_UhogU0jqnjiza3zarbR1U",
  authDomain: "club-ecommerce-60929.firebaseapp.com",
  projectId: "club-ecommerce-60929",
  storageBucket: "club-ecommerce-60929.firebasestorage.app",
  messagingSenderId: "854463143419",
  appId: "1:854463143419:web:2ee54dda85d05c69657f5e"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);