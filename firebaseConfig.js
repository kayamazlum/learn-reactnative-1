import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkOddGATMr6Mz9-vsbP-GymgK_SlSpUKo",
  authDomain: "test-app-ba511.firebaseapp.com",
  projectId: "test-app-ba511",
  storageBucket: "test-app-ba511.firebasestorage.app",
  messagingSenderId: "168556526219",
  appId: "1:168556526219:web:3867a31721bad21f54f28e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);

export default app;
