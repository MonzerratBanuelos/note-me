export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  onSnapshot,
  doc,
  updateDoc,
  orderBy,
  query,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
// eslint-disable-next-line import/no-unresolved
  } from 'firebase/firestore';
  export {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
// eslint-disable-next-line import/no-unresolved
  } from 'firebase/auth';
export { initializeApp } from "firebase/app";