import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import initializeFirebaseClient from "./initFirebase";
import firebaseUsers from "./firebaseUsers";

// Helpful hook for you to read the currently authenticated user's document from Firestore using their ID
export default function useFirebaseDocument() {
  const { db } = initializeFirebaseClient();
  const { user, isLoading: loadingUser } = firebaseUsers();
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState<DocumentData | null>(null);

  useEffect(() => {
    if (!loadingUser && user && db) {
      (async () => {
        const docRef = doc(db, "users", user.uid);
        const listener = onSnapshot(docRef, (doc) => {
          if (doc.exists()) {
            setDocument({
              ...doc.data(),
              id: doc.id,
            });
          } else {
            console.log("hey", doc);
            setDocument(null);
          }
          setIsLoading(false);
        });

        return () => {
          listener();
        };
      })();
    } else {
      setIsLoading(false);
    }
  }, [db, user, loadingUser]);

  return { isLoading, document };
}
