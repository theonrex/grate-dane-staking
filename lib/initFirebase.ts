import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

// Create Client-Side Instance of Firebase
export default function initializeFirebaseClient(): {
  db: Firestore;
  auth: Auth;
} {
  const firebaseApp = initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  });

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return {
    db,
    auth,
  };
}

