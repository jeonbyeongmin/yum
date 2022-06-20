import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import {db} from '../firebase';

export async function addBasket(uid: string, data: string[]) {
  console.log('data', data);
  const userRef = doc(db, 'users', uid);

  // Set the "capital" field of the city 'DC'
  await updateDoc(userRef, {
    shoppingIngredient: data,
  });
}
