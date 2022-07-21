import { proxy } from "valtio";
import { Post, User } from "../model";

interface UserStateType {
  users: User[];
  singleUser?: User;
}

interface PostStateType {
  posts: Post[];
}

export const UserState = proxy<UserStateType>({
  users: [],
  singleUser: undefined,
});

export const PostState = proxy<PostStateType>({
  posts: [],
});
