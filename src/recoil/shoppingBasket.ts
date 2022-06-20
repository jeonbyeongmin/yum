import {atom} from 'recoil';
import {IIngredientItem} from 'types/store';

export const shoppingBasketState = atom<IIngredientItem[]>({
  key: 'shoppingBasketState',
  default: [],
});
