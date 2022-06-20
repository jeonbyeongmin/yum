import {db} from '../firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {IIngredientItem, IStoreItem} from 'types/store';
import {isGcsTfliteModelOptions} from 'firebase-admin/lib/machine-learning/machine-learning-api-client';

export async function addStoreItem(data: IStoreItem) {
  try {
    //DB에 등록
    const docRef = await addDoc(collection(db, 'store'), data);
    // console.log('Document written with ID: ', docRef.id);
    console.log('재료 등록에 성공했습니다!', data, docRef);
    return {state: true, docRef};
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
export async function getIngredients(docIds: string[], ingredients: any[]) {
  console.log('docIds', docIds);
  if (docIds.length === 0) return [];
  const q = query(collection(db, 'store'), where('__name__', 'in', docIds));
  const querySnapshot = await getDocs(q);
  const result: IIngredientItem[] = [];
  querySnapshot.forEach(doc => {
    for (const ing of ingredients) {
      if (doc.id === ing.docId) {
        result.push({
          ...doc.data(),
          iamount: ing.iamount,
          docId: doc.id,
        } as IIngredientItem);
      }
    }
  });

  return result;
}
export async function getStoreItems(searchText = '') {
  const q = query(collection(db, 'store'));
  const querySnapshot = await getDocs(q);
  const result: IStoreItem[] = [];

  querySnapshot.forEach(doc => {
    const data = doc.data() as IStoreItem;
    if (data.name.includes(searchText)) {
      result.push({
        ...data,
        docId: doc.id,
      });
    }
  });

  console.log('검색 결과', result);
  return result;
}

export async function getStoreItem(docId: any) {
  const docRef = doc(db, 'store', docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
  }
}
