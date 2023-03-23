import { ILoggedUser } from "../types/loggedUser";
import { ref, set } from "firebase/database";
import { db } from "./firebase";

export const writeUserData = async ({
  userUid,
  name,
  email,
  profilePhotoURL,
}: ILoggedUser) => {
  const userRef = ref(db, "users/" + userUid);

  await set(userRef, {
    userUid,
    name,
    email,
    profilePhotoURL,
  });
};
