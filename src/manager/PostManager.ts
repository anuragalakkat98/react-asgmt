import { User } from "../model";
import { PostService } from "../service/PostService";
import { PostState, UserState } from "../store";

export class PostManager {
  static getAllPosts = async (user?: User) => {
    const posts = await PostService.getAll(user?.id);
    if (posts) return (PostState.posts = posts);
    UserState.singleUser = user;
  };
}
