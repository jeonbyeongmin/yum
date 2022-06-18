export interface IUser {
  uid: string;
  userName: string;
  userImg: string;
  liked: string[]; //좋아한 레시피 docId
  bookmarked: string[];
}
