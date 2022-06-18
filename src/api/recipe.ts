import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import {type} from 'os';
import {IRecipeItem} from 'types/recipe';
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
  const q = query(collection(db, 'recipe'), orderBy('createDate'), limit(8));

  const querySnapshot = await getDocs(q);
  const result: IRecipeItem[] = [];
  querySnapshot.forEach(doc => {
    console.log(doc.data().cookingImgs[0]);
    result.push({
      docId: doc.id,
      name: doc.data().cookingInfo.name,
      desc: doc.data().cookingInfo.desc,
      img: doc.data().cookingImgs[0] ?? undefined,
      likeCount: doc.data().likeCount,
      uid: doc.data().uid, //TODO : uid 추가 필요
    });
  });
  return result;
}
