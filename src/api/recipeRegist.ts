// import {getDatabase, ref, set} from 'firebase/database';
// const db = getDatabase().collection('recipe');
import {collection, addDoc} from 'firebase/firestore';
import {getDownloadURL, ref, uploadString} from 'firebase/storage';
import {db, storage} from '../firebase';

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
      imgPaths.push(fileURL);
    }
    const newStep = [...data.steps];
    for (const step in data.steps) {
      if (data.steps[step].img) {
        const storageRef = ref(storage, `image/${data.name}/step${step}`);
        const res = await uploadString(
          storageRef,
          data.steps[step].img,
          'data_url',
        );
        const fileURL = await getDownloadURL(res.ref);
        newStep[step].img = fileURL;
      }
    }
    const newData = {
      ...data,
      cookingImgs: imgPaths,
      steps: newStep,
    };
    const docRef = await addDoc(collection(db, 'recipe'), newData);
    // console.log('Document written with ID: ', docRef.id);
    console.log('레시피 등록에 성공했습니다!', newData, docRef);
    return docRef;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
