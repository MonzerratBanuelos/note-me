import {
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
  // eslint-disable-next-line import/no-unresolved
    } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
    import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup,
  // eslint-disable-next-line import/no-unresolved
    } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
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
  // eslint-disable-next-line import/no-unresolved
    };
  // Funciones desde Firebase

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
};