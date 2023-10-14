import { instance } from "../axiosInstance";

export const registerGuest = async (data) => {
  try {
    const result = await instance.post("/public/registration", {
      ...data,
      role: 1,
    });
    return (data = result.data);
  } catch (error) {
    console.log(error, "ERROR WHILE REGISTERING THE GUEST");
  }
};
