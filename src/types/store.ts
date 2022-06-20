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
