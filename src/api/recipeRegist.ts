// import {getDatabase, ref, set} from 'firebase/database';
// const db = getDatabase().collection('recipe');
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../firebase';

export async function addRecipe(data: any) {
  try {
    const docRef = await addDoc(collection(db, 'recipe'), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
