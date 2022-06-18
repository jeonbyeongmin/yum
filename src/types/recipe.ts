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
  // TODO : 등록한 user의 데이터를 넣어야 한다.
}

export interface IRecipeInfo extends IRecipeRegist {
  // TODO : 등록한 user의 데이터를 넣어야 한다.
  user?: string;
}
