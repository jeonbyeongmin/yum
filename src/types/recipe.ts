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

// export interface IRecipeInfo extends ICookingInfo {
//   // imgs: [];
//   infredients: [1, 2];
//   desc: '요즘 백파더 백종원 에그치즈토스트가 대유행이라죠\n칼질도 필요 없고, 원팬으로 만들기로 간단하지만\n맛은 대박~ 요건 꼭 만들어 보세요\n에그드랍 가실 필요 없어요^^';
//   steps: IRecipeStep[];
//   cookingImgs: string[];
// }

export interface IRecipeInfo {
  cookingInfo: ICookingInfo;
  steps: IRecipeStep;
  ingredients: any;
  user: {
    uid: string;
    name: string;
    img: string;
  };
}
