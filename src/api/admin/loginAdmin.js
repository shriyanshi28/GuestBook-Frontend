import { instance } from "../axiosInstance";

export const loginAdmin = async (data) => {
  try {
    const result = await instance.post("/public/authenticate", data);
    return result.data;
  } catch (error) {
    console.log(error, "ERROR WHILE LOGGIN IN THE ADMIN");
  }
};
