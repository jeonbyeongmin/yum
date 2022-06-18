export interface IUser {
  uid: string;
  userName: string;
  userImg: string;
  email: string;
  likedRecipe: string[];
  bookmarkedRecipe: string[];
  bookmarkedIngredient: string[];
  shoppingIngredient: string[];
  follower: string[];
  following: string[];
}
