import 'firebase/compat/firestore';
import {initializeApp, getApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'yum-84499.firebaseapp.com',
  projectId: 'yum-84499',
  storageBucket: 'yum-84499.appspot.com',
  messagingSenderId: '511920369786',
  appId: '1:511920369786:web:ae899240d942a7d6504bc3',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const firebaseApp = getApp();
// const storage = getStorage(firebaseApp, 'gs://my-custom-bucket');
const storage = getStorage(app);

export {db, storage, auth};
