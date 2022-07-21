import { User } from "../model";
import api from "./ApiService";

export class UserService {
  static getAllUsers = async () => {
    try {
      const userResponse = await api.get<User[]>("/users");
      if (userResponse) return userResponse.data;
    } catch (error) {
      console.log(error);
    }
  };

  static getUserById = async (id: number) => {
    try {
      const singleUser = await api.get(`/users/${id}`);
      if (singleUser) return singleUser.data;
    } catch (error) {
      console.log(error);
    }
  };
}
