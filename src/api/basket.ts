import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {IBasketItem, IIngredientItem} from 'types/store';
import {db} from '../firebase';

export async function setBasket(data: string[]) {
  try {
    //DB에 등록
    const docRef = await addDoc(collection(db, 'users'), data);
    // console.log('Document written with ID: ', docRef.id);
    console.log('재료 등록에 성공했습니다!', data, docRef);
    return {state: true, docRef};
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

export async function getUserBasketItem(uid: string) {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const items = docSnap.data().shoppingIngredient;
    const q = query(collection(db, 'store'), where('__name__', 'in', items));
    console.log(docSnap.data().shoppingIngredient);
    const querySnapshot = await getDocs(q);
    const result: IBasketItem[] = [];
    querySnapshot.forEach(doc => {
      // console.log(doc.data());
      result.push({
        ...doc.data(),
        docId: doc.id,
        count: 1, //dummy
      });
    });
    return result;
    // return [];
  } else {
    console.log('No such document!');
  }
}
