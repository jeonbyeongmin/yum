// export interface IIngredient {
//   id: number;
//   name: string;
//   imgUrl: string;
//   calorie: number;
//   amount?: string;
// }
// export interface IRecipeInfo {
//   step: number;
//   desc: string;
//   imgUrl: string;
//   ingredients: Array<IIngredient>;
// }
export interface ICookingInfo {
  [index: string]: any;
  name: string;
  desc: string;
  imgs: string[];
  servings: number; //인분
  time: string;
  category: string;
}
export interface IRecipeStep {
  step: number;
  content: string;
  img: string;
}
export interface IRecipeInfo extends ICookingInfo {
  steps: IRecipeStep[];
}
