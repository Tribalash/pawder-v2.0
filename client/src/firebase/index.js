import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from "firebase/storage";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyCnfVFrFjtz69Hsm-0R84ckwlrtt8zfuWs",
  authDomain: "pawder-e67af.firebaseapp.com",
  projectId: "pawder-e67af",
  storageBucket: "pawder-e67af.appspot.com",
  messagingSenderId: "972803524271",
  appId: "1:972803524271:web:c56b1644f7fa6bf311765a",
  measurementId: "G-WX9ECZ8TKQ"
});

// To use import firebase/index.js const { service } = 'firebase/index.js'
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
// export const googleProvider = new GoogleAuthProvider();
// export const storage = getStorage(firebaseApp);