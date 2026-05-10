// استيراد خدمات Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// إعدادات Firebase (البيانات اللي بعتها انت)
const firebaseConfig = {
  apiKey: "AIzaSyB3Z8iHqNNfWEWrwIfP15x3hlh65GEZ0mQ",
  authDomain: "sanaayee.firebaseapp.com",
  databaseURL: "https://sanaayee-default-rtdb.firebaseio.com",
  projectId: "sanaayee",
  storageBucket: "sanaayee.firebasestorage.app",
  messagingSenderId: "1048456368002",
  appId: "1:1048456368002:web:e37c8e2b7ebba18ef2499b",
  measurementId: "G-XCYY1H22CQ"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// تصدير الخدمات لاستخدامها في الملفات الأخرى
export { auth, db, storage, 
         signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
         collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc, query, where, addDoc, onSnapshot,
         ref, uploadBytes, getDownloadURL, deleteObject };
