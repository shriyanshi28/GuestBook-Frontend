import { instance } from "../axiosInstance";

export const registerAdmin = async (data) => {
  try {
    const result = await instance.post("/public/registration", {
      ...data,
      role: 2,
    });
    return result.data;
  } catch (error) {
    console.log(error, "ERROR");
  }
};
