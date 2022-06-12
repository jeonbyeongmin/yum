// import {getDatabase, ref, set} from 'firebase/database';
// const db = getDatabase().collection('recipe');
import {collection, addDoc} from 'firebase/firestore';
import {ref, uploadBytes} from 'firebase/storage';
import {db, storage} from '../firebase';
// const storage = firebase.storage();

export async function addRecipe(data: any) {
  try {
    console.log(storage);
    console.log('data', data);
    // const storageRef = storage.ref();
    const storageRef = ref(storage, 'image/' + `${data.name}`);
    // const savepath = storageRef.child('image/' + `${data.name}`);
    // const imagesRef = ref(storageRef, 'image/' + `${data.name}`));
    // const upload = imagesRef.put(data.imgs[0]);
    // console.log(upload);
    const metadata = {
      contentType: 'image/jpeg',
    };
    // Upload the file and metadata
    console.log(data.cookingImgs[0]);
    const uploadTask = uploadBytes(storageRef, data.cookingImgs[0], metadata);
    console.log(uploadTask);
    // const docRef = await addDoc(collection(db, 'recipe'), data);
    // console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
