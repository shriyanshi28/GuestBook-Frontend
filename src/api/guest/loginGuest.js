import { instance } from "../axiosInstance"; 

export const loginGuest = async (data) => {
  console.log(data, "DATA")
  try {
    const result = await instance.post("/public/authenticate", data);
    return result.data;
  } catch (error) {
    console.log(error, "ERROR WHILE LOGGIN IN THE GUEST");
  }
};
