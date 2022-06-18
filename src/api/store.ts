import {db} from '../firebase';
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
} from 'firebase/firestore';
import {IStoreItem} from 'types/store';

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

export async function getStoreItem(searchText = '') {
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
