import {atom} from 'recoil';
import {IBasketItem} from 'types/store';

export const shoppingBasketState = atom<IBasketItem[]>({
  key: 'shoppingBasketState',
  default: [],
});
