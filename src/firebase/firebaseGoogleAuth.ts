import { getAuth } from "firebase/auth";
import { app } from "./firebase";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (e: any) {
    console.log(e.code, e.message);
  }
};

export const authSignOut = async () => {
  await signOut(auth);
};
