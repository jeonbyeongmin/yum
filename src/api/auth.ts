import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';

export async function createUser(
  email: string,
  password: string,
  name: string,
) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.log(error);
  }
}
