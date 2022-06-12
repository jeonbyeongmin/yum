import {db} from '../firebase';
import {doc, getDoc} from 'firebase/firestore';

export const getRecipe = async (docId: string) => {
  const docRef = doc(db, 'recipe', docId);
  const docSnap = await getDoc(docRef);
  let result;

  if (docSnap.exists()) {
    // console.log('Document data:', docSnap.data());
    result = docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
  return result;
};
