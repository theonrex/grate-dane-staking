import { useState } from "react";
import React from "react";
import { ConnectWallet, useAddress, useAuth } from "@thirdweb-dev/react";

import { signInWithCustomToken, signOut } from "firebase/auth";
import initializeFirebaseClient from "../lib/initFirebase";
import {
  getDoc,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import styles from "../styles/Home.module.css";
import useFirebaseUser from "../lib/useFirebaseUser";
import useFirebaseDocument from "../lib/useFirebaseUserDocument";
import HomeMarquee from "../components/HomeMarquee";

export default function Login() {
  const thirdwebAuth = useAuth();
  const address = useAddress();
  const { auth, db } = initializeFirebaseClient();
  const { user, isLoading: loadingAuth } = useFirebaseUser();
  const { document, isLoading: loadingDocument } = useFirebaseDocument();
  const [username, setUsername] = useState("");
  const [fullName, setfullName] = useState("");
  const [about, setAbout] = useState("");


 

  const signIn = async () => {
    // Use the same address as the one specified in _app.tsx.
    const payload = await thirdwebAuth?.login();

    try {
      // Make a request to the API with the payload.
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ payload }),
      });

      // Get the returned JWT token to use it to sign in with
      const { token } = await res.json();

      // Sign in with the token.
      const userCredential = await signInWithCustomToken(auth, token);
      // On success, we have access to the user object.
      const user = userCredential.user;

      // If this is a new user, we create a new document in the database.
      const usersRef = doc(db, "users", user.uid!);
      const userDoc = await getDoc(usersRef);

      if (!userDoc.exists()) {
        // User now has permission to update their own document outlined in the Firestore rules.
        setDoc(usersRef, { createdAt: serverTimestamp() }, { merge: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

const saveUserInfo = async () => {
  if (!user) return; // check if user is null

  // Update the user document with the new user info
  const userRef = doc(db, "users", user.uid);

  if (username) {
    await updateDoc(userRef, "username", username);
  }

  if (fullName) {
    await updateDoc(userRef, "fullName", fullName);
  }

  if (about) {
    await updateDoc(userRef, "about", about);
  }
};


  return (
    <div className="">
      <HomeMarquee />{" "}
      <div className="container">
        <h1 className={styles.h1}>Thirdweb + Firebase</h1>

        {address ? (
          <div className={styles.rowx}>
            {!user ? (
              <button onClick={() => signIn()} className={styles.mainButton}>
                Sign in with Wallet
              </button>
            ) : (
              <div className="">
                <div className="col50">
                  <h2>Edit User Info</h2>
                  <label htmlFor="username">Name:</label>

                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                  />

                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <label htmlFor="about">About:</label>
                  <input
                    type="text"
                    name="about"
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />

                  <button
                    onClick={() => saveUserInfo()}
                    className="save_user_details"
                  >
                    Save User Info
                  </button>
                </div>

                <div className="col50">
                  <h2>
                    {" "}
                    {document?.username ? document?.username : "Current"}{" "}
                    Information
                  </h2>
                  <p>
                    <b>User ID: </b>
                    {loadingAuth ? "Loading..." : user?.uid || "Not logged in"}
                  </p>
                  <p>
                    <b>Document ID: </b>
                    {loadingDocument
                      ? "Loading..."
                      : document?.id || "No document"}
                  </p>
                  <p>
                    <b>Username: </b>
                    {loadingDocument
                      ? "Loading..."
                      : document?.username || "Not logged in"}
                  </p>
                  <p>
                    <b>Name: </b>
                    {loadingDocument
                      ? "Loading..."
                      : document?.fullName || "Update your name"}
                  </p>{" "}
                  <p>
                    <b>About: </b>
                    {loadingDocument
                      ? "Loading..."
                      : document?.about || "Update About Me"}
                  </p>
                </div>

                <button onClick={() => signOut(auth)} className="sign_out">
                  Sign Out
                </button>
              </div>
            )}

            {}
          </div>
        ) : (
          <div>
            <p className={styles.explain}>
             To proceed, please authenticate using your wallet by clicking on the button below. This will result in the creation of a user account for you in Firebase Auth and a document in Firestore."
            </p>
            <ConnectWallet
              className="connect_wallet"
              btnTitle="Connect Wallet"
            />
          </div>
        )}
      </div>
    </div>
  );
}
