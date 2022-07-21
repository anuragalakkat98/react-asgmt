import { Post, User } from "../model";
import { PostState, UserState } from "../store";

export class StateManager {
  static setUsers = async (allUsers: User[]) => {
    UserState.users = allUsers;
  };

  static setUserInfo = (currentUser: User) => {
    UserState.singleUser = currentUser;
  };

  static setPostList = (allPosts: Post[]) => {
    PostState.posts = allPosts;
  };
}
