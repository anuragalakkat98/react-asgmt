import { UserService } from "../service/UserService";
import { StateManager } from "./StateManager";

export class UserManager {
  static getAllUsers = async () => {
    const userResponse = await UserService.getAllUsers();
    StateManager.setUsers(userResponse || []);
  };

  static getUserById = async (id: number) => {
    const response = await UserService.getUserById(id);
    StateManager.setUserInfo(response || []);
  };
}
