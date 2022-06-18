import {doc, getDoc} from 'firebase/firestore';
import {db} from '../firebase';

export async function getRecipe(docId: any = 'F5i0HXywZtZXIxZLVisM') {
  const docRef = doc(db, 'recipe', docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log('Document data:', docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}
