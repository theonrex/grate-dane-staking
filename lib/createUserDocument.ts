import { getFirestore, doc, setDoc } from "firebase/firestore";
import { User } from "firebase/auth";

import { UserData } from "../helpers/types";

export const createUserDocument = async (user: User, userData: UserData) => {
  const { uid, email } = user;
  const userRef = doc(getFirestore(), "users", uid);

  const data = {
    email,
    username: userData.userName,
    fullName: userData.fullName,
    about: userData.about,
  };

  await setDoc(userRef, data);
};
