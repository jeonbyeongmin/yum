export const RecipeData = {
  id: 1,
  name: '샌드위치',
  description: '샌드위치는 맛있어요! 야채 싫어',
  writerId: '1',
  scrapCnt: 0,
  imgUrl:
    'https://user-images.githubusercontent.com/49177223/170922680-53040f09-9b7b-40c9-8c48-16fc986155e6.png',
  cookingTime: '10분',
  ingredients: [
    {id: 1, name: '식빵', amout: '2조각'},
    {id: 2, name: '달걀', amout: '3개'},
    {id: 3, name: '체다치즈', amout: '4개'},
  ],
  infos: [
    {
      step: 1,
      desc: '계란과 버터 준비 ',
      imgUrl:
        'https://user-images.githubusercontent.com/49177223/170922945-d19a35ac-929e-4f78-b662-82acd2049301.png',
      ingredients: [{id: 1, name: '식빵'}],
    },
    {
      step: 2,
      desc: '식빵2장, 체다슬라이스치즈 4장, 과일잼을 준비합니다 ',
      imgUrl:
        'https://user-images.githubusercontent.com/49177223/170923000-6359143e-d67a-4924-b9ec-4098ce931a90.png',
      ingredients: [],
    },
    {
      step: 3,
      desc: '계란 3개를 깨뜨려 소금을 약간만 뿌려 곱게 풀어 주세요',
      imgUrl:
        'https://user-images.githubusercontent.com/49177223/170923023-215ed1b3-1f0d-45ba-a6cc-7ebdc1097c52.png',
      ingredients: [],
    },
    {
      step: 4,
      desc: `맛있고 간단한  에그치즈토스트 완성입니다~
      레시피는 간단한데 먹어 보면 깜짝 놀랄맛 ~
      파슬리가루 있으심 뿌려주시면
      더 이쁘고 먹음직스러워요^^`,
      imgUrl:
        'https://user-images.githubusercontent.com/49177223/170923023-215ed1b3-1f0d-45ba-a6cc-7ebdc1097c52.png',
      ingredients: [],
    },
  ],
};
export const IngredientMock = {
  id: 1,
  name: '식빵',
  imgUrl:
    'https://user-images.githubusercontent.com/49177223/170922945-d19a35ac-929e-4f78-b662-82acd2049301.png',
  amout: '2조각', //?
};
