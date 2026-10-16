import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web config public bilgidir; erişim Firestore kuralları ile korunur.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAEa7XLZ7A0U42Hv622WChtHZfJqwLzbuo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "advera-c8dd0.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "advera-c8dd0",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "advera-c8dd0.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "929492188819",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:929492188819:web:4ee9b01cce00e2bfaed766",
};

// Proje diğer uygulamalarla paylaşıldığı için Peteks'e ayrı veritabanı kullanılır.
export const FIRESTORE_DATABASE_ID = "peteks";
export const ADMIN_EMAIL = "info@peteksinsaat.com.tr";

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app, FIRESTORE_DATABASE_ID);
export const auth = getAuth(app);
