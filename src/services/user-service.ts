import { AxiosError } from "axios";
import { privateInstance, publicInstance } from "./api/client-api";
import { userRouter } from "./routers/user-router";

class UserService {
  async login({ username, password }: { username: string; password: string }) {
    try {
      const res = await publicInstance.post(userRouter.login, { username, password });
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      } else {
        throw new Error("Server error!");
      }
    }
  }
  async register({ username, password }: { username: string; password: string }) {
    try {
      const res = await publicInstance.post(userRouter.register, { username, password });
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      } else {
        throw new Error("Server error!");
      }
    }
  }
  async getUser() {
    try {
      const res = await privateInstance.get(userRouter.user);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message || error.message);
      } else {
        throw new Error("Server error!");
      }
    }
  }
}

export default new UserService();