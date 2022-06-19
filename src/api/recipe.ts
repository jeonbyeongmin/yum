import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  QuerySnapshot,
  where,
} from 'firebase/firestore';
import {IRecipeItem} from 'types/recipe';
import {db} from '../firebase';

export async function getRecipe(docId: any = 'F5i0HXywZtZXIxZLVisM') {
  console.log(docId);
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
const getRecipeItemList = (docs: QuerySnapshot<DocumentData>) => {
  const result: IRecipeItem[] = [];
  docs.forEach(doc => {
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
};
export async function getFollowRecipes(uid = 'G9ZRvlS1QWZbylk1FAJHfEdyBRz1') {
  //const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));
  //위처럼 in을 쓰는 거로 바꾸는게 좋을거같은데
  const q = query(
    collection(db, 'recipe'),
    where('uid', '==', uid),
    limit(8), //이부분 수정하면, 게시글 개수 조절 가능
  );
  const querySnapshot = await getDocs(q);
  return getRecipeItemList(querySnapshot);
}

export async function getRecentRecipes() {
  const q = query(
    collection(db, 'recipe'),
    orderBy('createDate', 'desc'),
    limit(8), //이부분 수정하면, 게시글 개수 조절 가능
  );

  const querySnapshot = await getDocs(q);
  return getRecipeItemList(querySnapshot);
}

export async function getLikedRecipes() {
  const q = query(
    collection(db, 'recipe'),
    orderBy('likeCount', 'desc'),
    limit(8), //이부분 수정하면, 게시글 개수 조절 가능
  );
  const querySnapshot = await getDocs(q);
  return getRecipeItemList(querySnapshot);
}
