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
  ingredients: string[];
  steps: IRecipeStep[];
  // TODO : 등록한 user의 데이터를 넣어야 한다.
}

export interface IRecipeInfo extends IRecipeRegist {
  // TODO : 등록한 user의 데이터를 넣어야 한다.
  docId: string; //key
  uid: string;
  createDate: Date;
  likeCount: number;
}

export interface IRecipeItem {
  docId: string;
  name: string;
  desc: string;
  img: string;
  uid: string;
  likeCount: number;
  userName?: string;
  userImg?: string;
}

export interface RecipeData extends IRecipeItem {
  isLiked: boolean;
  isBookmarked: boolean;
}
