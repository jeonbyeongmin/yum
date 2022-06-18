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
export interface IRecipeRegist {
  cookingInfo: ICookingInfo;
  cookingImgs: string[];
  infredients: string[];
  steps: IRecipeStep[];
  // users :
}

export interface IRecipeInfo extends IRecipeRegist {
  user?: string;
}
