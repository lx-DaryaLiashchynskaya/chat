import { onAuthStateChanged } from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase/firebaseGoogleAuth";
import { ILoggedUser } from "../types/loggedUser";
import { writeUserData } from "../firebase/firebaseUserData";

export const callAuthCheck = (
  setIsSignIn: (isSignIn: boolean) => void,
  setLoggedUser: (loggedUser: ILoggedUser) => void
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsSignIn(true);
      const loggedUser = {
        name: user.displayName,
        email: user.email,
        profilePhotoURL: user.photoURL,
        userUid: user.uid,
      } as ILoggedUser;
      writeUserData(loggedUser);
      setLoggedUser(loggedUser);
    } else {
      setIsSignIn(false);
      signInWithGoogle();
    }
  });
};
