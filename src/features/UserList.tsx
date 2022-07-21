import React from "react";
import { useSnapshot } from "valtio";
import { UserState } from "../store";
import UserItem from "./UserItems";

const UserList = () => {
  const { users } = useSnapshot(UserState);

  return (
    <div>
      <h1>Users List ({users.length})</h1>
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
};

export default UserList;
