import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { PostManager } from "../manager/PostManager";
import { PostState } from "../store";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useSnapshot(PostState);

  const LoadAllPosts = async () => {
    PostManager.getAllPosts();
  };

  useEffect(() => {
    LoadAllPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostItem posts={post} />
      ))}
    </div>
  );
};

export default PostList;
