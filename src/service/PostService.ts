import { Post } from "../model";
import api from "./ApiService";

export class PostService {
  static getAll = async (userId: number | undefined) => {
    try {
      const response = await api.get<Post[]>("/posts", { params: { userId } });
      if (response) return response.data;
    } catch (error) {
      console.log(error);
    }
  };
}
