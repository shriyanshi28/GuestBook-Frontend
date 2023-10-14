import { instance } from "./axiosInstance";
import Cookies from "js-cookie";

instance.interceptors.request.use(
  (config) => {
    const jwtToken = Cookies.get("jwtToken");
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error, "ERROR POSTING GUEST DATA");
  }
);

export const postGuestData = async(data) => {
  try {
    const result = await instance.post(`/guestbook/create`, data);
    return result.data;
  } catch (error) {
    console.log(error, "ERROR WHILE POSTING GUEST DATA");
  }
}