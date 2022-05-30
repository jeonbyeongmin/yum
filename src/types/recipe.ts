export interface IIngredient {
  id: number;
  name: string;
  imgUrl: string;
  calorie: number;
  amount?: string;
}
export interface IRecipeInfo {
  step: number;
  desc: string;
  imgUrl: string;
  ingredients: Array<IIngredient>;
}
