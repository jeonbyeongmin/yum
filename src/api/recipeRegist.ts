// import {getDatabase, ref, set} from 'firebase/database';
// const db = getDatabase().collection('recipe');
import {collection, addDoc} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes, uploadString} from 'firebase/storage';
import {db, storage} from '../firebase';
// const storage = firebase.storage();

export async function addRecipe(data: any) {
  try {
    const imgPaths = [];
    for (const imgIndex in data.cookingImgs) {
      const storageRef = ref(storage, `image/${data.name}/${imgIndex}`);
      const res = await uploadString(
        storageRef,
        data.cookingImgs[imgIndex],
        'data_url',
      );
      const fileURL = await getDownloadURL(res.ref);
      // console.log(imgIndex, fileURL);
      imgPaths.push(fileURL);
    }

    const newData = {
      ...data,
      cookingImgs: imgPaths,
    };
    const docRef = await addDoc(collection(db, 'recipe'), newData);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
