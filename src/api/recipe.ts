import {collection, doc, getDoc, getDocs, query} from 'firebase/firestore';
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

export async function getRecentRecipes() {
  const q = query(collection(db, 'recipe'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
}
