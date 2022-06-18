export interface IStoreItem {
  [index: string]: any;
  docId?: number;
  name: string;
  img: string;
  price: number;
  company: string;
  category?: string;
  // bookmarked: false; //user에 둬야함
}
