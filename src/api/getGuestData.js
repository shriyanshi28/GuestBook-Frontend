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
    console.log(error, "ERROR GUEST DATA");
  }
);

export const getGuestData = async() => {
  try {
    const result = await instance.get("/guestbook/entries");
    return result.data;
  } catch (error) {
    console.log(error, "ERROR WHILE FETCHING GUEST DATA");
  }
}