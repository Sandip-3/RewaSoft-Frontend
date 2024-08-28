import { userListAxios } from "../config/axios";

export const getUserList = () => {
  return userListAxios.get("/users");
};
