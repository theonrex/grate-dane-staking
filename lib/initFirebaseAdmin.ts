import admin from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { Firestore, getFirestore } from "firebase-admin/firestore";

// Create Server-Side Instance of Firebase
export default function initializeFirebaseServer(): {
  db: Firestore;
  auth: Auth;
} {
  const clientEmail = process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL;

const privateKey = process.env.NEXT_PUBLIC_MY_PRIVATE_VARIABLE;

  const projectId = process.env.NEXT_PUBLIC_INIT_PROJECT_ID;

  if (admin.apps.length === 0) {
    initializeApp({
      credential: cert({
        clientEmail,
        privateKey,
        projectId,
      }),
    });
  }

  const db = getFirestore();
  const auth = getAuth();

  return {
    db,
    auth,
  };
}
