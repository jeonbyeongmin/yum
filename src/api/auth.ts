import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import {doc, setDoc} from 'firebase/firestore';
import {db, auth} from '../firebase';

interface FirebaseAuthError {
  code: string;
  message: string;
  name: string;
}

export async function createUser(
  email: string,
  password: string,
  name: string,
) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const {user} = res;

    if (user) {
      await updateProfile(user, {displayName: name});
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
      });
    }

    return {statusCode: 200, user};
  } catch (error) {
    const err = error as FirebaseAuthError;
    const statusCode = err.code;
    const errorMessage = err.message;
    return {statusCode, errorMessage};
  }
}

export async function signIn(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const {user} = res;
    return {statusCode: 200, user};
  } catch (error) {
    const err = error as FirebaseAuthError;
    const statusCode = err.code;
    const errorMessage = err.message;
    return {statusCode, errorMessage};
  }
}
