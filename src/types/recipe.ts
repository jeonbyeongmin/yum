export interface ICookingInfo {
  [index: string]: any;
  name: string;
  desc: string;
  servings: number; //인분
  time: string;
  category: string;
}
export interface IRecipeStep {
  step: number;
  content: string;
  img: string;
}
