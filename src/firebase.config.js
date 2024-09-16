import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkBIHyjhOiRXeswxP2uBEzHvF0gsFUhWY",
  authDomain: "nagpurdial123.firebaseapp.com",
  projectId: "nagpurdial123",
  storageBucket: "nagpurdial123.appspot.com",
  messagingSenderId: "49520228318",
  appId: "1:49520228318:web:489ed149f26c3629068f4f",
  measurementId: "G-HLKZQEJF3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
