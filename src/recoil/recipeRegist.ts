import {atom} from 'recoil';
import {IRecipeInfo} from 'types/recipe';

const initInfo = {
  name: '',
  desc: '',
  imgs: [],
  servings: 0,
  time: '',
  category: '',
  steps: [
    {
      step: 0,
      content: '',
      img: '',
    },
  ],
};
const recipeRegistState = atom<IRecipeInfo>({
  key: 'nameState',
  default: initInfo,
});

export {recipeRegistState};
