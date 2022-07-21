import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { UserManager } from "../manager/UserManager";
import PostScreen from "./PostScreen";
import UserList from "./UserList";

const UserScreen = () => {
  const loadAllUsers = async () => {
    await UserManager.getAllUsers();
  };

  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <div>
      <Row>
        <Col sm={4}>
          {" "}
          <UserList />
        </Col>
        <Col sm={8}>
          <PostScreen />
        </Col>
      </Row>
    </div>
  );
};

export default UserScreen;
