import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'yum-84499.firebaseapp.com',
  projectId: 'yum-84499',
  storageBucket: 'yum-84499.appspot.com',
  messagingSenderId: '511920369786',
  appId: '1:511920369786:web:ae899240d942a7d6504bc3',
};
// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export {firestore};
