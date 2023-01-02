import { child, getDatabase, ref, get } from "firebase/database";
import { getFirebaseApp } from "./../firebaseHelper";

export const getUserData = async (userId) => {
  try {
    const app = getFirebaseApp();
    const dbRef = ref(getDatabase());
    const useRef = child(dbRef, `users/${userId}`);

    const snapshot = await get(useRef);
    return snapshot.val();
  } catch (error) {
    console.log(error);
  }
};
