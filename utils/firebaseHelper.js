// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD5TGRUSsViTW60iL2JeJLL7uM3o7wiBU8",
    authDomain: "whatsapp-f36ba.firebaseapp.com",
    projectId: "whatsapp-f36ba",
    storageBucket: "whatsapp-f36ba.appspot.com",
    messagingSenderId: "115493077388",
    appId: "1:115493077388:web:b6bf50bf29a69f00e756a9",
    measurementId: "G-MWWZ69E4NV",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
