// import {getDatabase, ref, set} from 'firebase/database';
// const db = getDatabase().collection('recipe');
import {collection, addDoc} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes, uploadString} from 'firebase/storage';
import {db, storage} from '../firebase';
// const storage = firebase.storage();

export async function addRecipe(data: any) {
  try {
    console.log(storage);
    console.log('data', data);
    const storageRef = ref(storage, 'image/' + `${data.name}`);
    const metadata = {
      contentType: 'image/jpeg',
    };
    const uploadTask = uploadBytes(storageRef, data.cookingImgs[0], metadata);
    console.log(uploadTask);
    // const docRef = await addDoc(collection(db, 'recipe'), data);
    // console.log('Document written with ID: ', docRef.id);

    const res = await uploadString(storageRef, data.cookingImgs[0], 'data_url');
    const fileURL = await getDownloadURL(res.ref);

    console.log(fileURL  );
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
