import Card from "react-bootstrap/Card";
import { Post } from "../model";

interface postItemProps {
  posts: Post;
}

const PostItem = ({ posts }: postItemProps) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>{posts.title}</Card.Title>
        <Card.Text>{posts.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostItem;
