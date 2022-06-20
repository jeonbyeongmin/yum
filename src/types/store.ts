export interface IStoreItem {
  [index: string]: any;
  docId?: string;
  name: string;
  desc: string;
  price: number;
  delivery: number;
  volume: string;
  company: string;
  img: string;
  category?: string;
  iname: string;
}
export interface IIngredientItem extends IStoreItem {
  // iname: string;
  docId: string;
  iamount: string;
}
export interface IBasketItem extends IStoreItem {
  docId: string;
  count: number;
}
export interface IProductItem {
  // id: number;
  // name: string;
  delivery: number | undefined;
  count: number;
  checked: boolean;
  // price: number;
}

export interface IMoneyBox {
  totalMoney: number;
  totalDelivery: number;
  estimateMoney: number;
}
