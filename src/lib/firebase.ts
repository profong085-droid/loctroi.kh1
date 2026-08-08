import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getMessaging, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBDvGtP2Bhxir1qWVyzqtBk5_tS12fA0Ps",
  authDomain: "fong-ab522.firebaseapp.com",
  projectId: "fong-ab522",
  storageBucket: "fong-ab522.firebasestorage.app",
  messagingSenderId: "287370467762",
  appId: "1:287370467762:web:3ce5a8716501eda336ecab",
  measurementId: "G-GVDKDN7YPC"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Messaging only in the browser (it uses window/navigator)
let messaging: ReturnType<typeof getMessaging> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      messaging = getMessaging(app);
    }
  });
}

export { app, auth, googleProvider, messaging };
