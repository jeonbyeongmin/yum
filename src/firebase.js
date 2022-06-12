import 'firebase/compat/firestore';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'yum-84499.firebaseapp.com',
  projectId: 'yum-84499',
  storageBucket: 'yum-84499.appspot.com',
  messagingSenderId: '511920369786',
  appId: '1:511920369786:web:ae899240d942a7d6504bc3',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
