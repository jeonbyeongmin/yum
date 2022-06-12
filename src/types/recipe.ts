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

export interface IRecipeInfo {
  cookingInfo: ICookingInfo;
  steps: IRecipeStep[];
  ingredients: any[];
  user: {
    uid: string;
    name: string;
    img: string;
  };
}
