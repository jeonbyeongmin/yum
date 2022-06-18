// import {getDatabase, ref, set} from 'firebase/database';
// const db = getDatabase().collection('recipe');
import {collection, addDoc} from 'firebase/firestore';
import {getDownloadURL, ref, uploadString} from 'firebase/storage';
import {IRecipeRegist} from 'types/recipe';
import {string} from 'yup';
import {db, storage} from '../firebase';

export async function addRecipe(data: IRecipeRegist) {
  try {
    const imgPaths = [];
    for (const imgIndex in data.cookingImgs) {
      const storageRef = ref(
        storage,
        `image/${data.cookingInfo.name}/${imgIndex}`,
      );
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
        const storageRef = ref(
          storage,
          `image/${data.cookingInfo.name}/step${step}`,
        );
        const res = await uploadString(
          storageRef,
          data.steps[step].img,
          'data_url',
        );
        const fileURL = await getDownloadURL(res.ref);
        newStep[step].img = fileURL;
      }
    }
    //IRecipeInfo 참고
    const newData = {
      ...data,
      cookingImgs: imgPaths,
      steps: newStep,
      uid: 'G9ZRvlS1QWZbylk1FAJHfEdyBRz1', //TODO : USER ID추가 필요
      // 레시피 초기 데이터 생성
      createDate: new Date(),
      likeCount: 0,
    };

    //DB에 등록
    const docRef = await addDoc(collection(db, 'recipe'), newData);
    // console.log('Document written with ID: ', docRef.id);
    console.log('레시피 등록에 성공했습니다!', newData, docRef);
    return {state: true, docRef};
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}
