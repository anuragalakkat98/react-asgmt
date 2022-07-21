import { useSnapshot } from "valtio";
import { UserState } from "../store";
import PostList from "./PostList";

const PostScreen = () => {
  const { singleUser } = useSnapshot(UserState);
  return (
    <div>
      <h1>Posts</h1>
      <p>Name : {singleUser?.name}</p>
      <p>Email : {singleUser?.email}</p>
      <PostList />
    </div>
  );
};

export default PostScreen;
