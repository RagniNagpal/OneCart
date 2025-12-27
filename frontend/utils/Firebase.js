// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY
// ,
//   authDomain: "loginonecart-fbc68.firebaseapp.com",
//   projectId: "loginonecart-fbc68",
//   storageBucket: "loginonecart-fbc68.firebasestorage.app",
//   messagingSenderId: "780443286250",
//   appId: "1:780443286250:web:a73655da4d36a9fa1ff593"
// };

// const app = initializeApp(firebaseConfig);
// const auth=getAuth(app)
// const provider =new  GoogleAuthProvider()

// export {auth,provider}


// utils/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-fbc68.firebaseapp.com",
  projectId: "loginonecart-fbc68",
  storageBucket: "loginonecart-fbc68.firebasestorage.app",
  messagingSenderId: "780443286250",
  appId: "1:780443286250:web:a73655da4d36a9fa1ff593"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);            // ✅ define auth
const provider = new GoogleAuthProvider();

export { auth, provider };             // ✅ export both
