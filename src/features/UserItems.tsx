import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSnapshot } from "valtio";
import { PostManager } from "../manager/PostManager";
import { UserManager } from "../manager/UserManager";
import { User } from "../model";
import { UserState } from "../store";

interface UserItemProps {
  user: User;
}

const UserItem = ({ user }: UserItemProps) => {
  const { singleUser } = useSnapshot(UserState);
  const isSelectedUser = singleUser?.id === user.id;

  const handleUser = async () => {
    await UserManager.getUserById(user.id);
    await PostManager.getAllPosts(user);
  };

  return (
    <ListGroup as="ul">
      <ListGroup.Item
        action
        style={{
          margin: 5,
        }}
        className={`list-group-item ${isSelectedUser ? "active" : ""}`}
        onClick={handleUser}
      >
        {user.name}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default UserItem;
