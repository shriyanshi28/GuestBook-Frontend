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
    console.log(error, "ERROR EDITING GUEST DATA");
  }
);

export const editGuestData = async(id, data) => {
  try {
    const result = await instance.post(`/guestbook/editEntry/${id}`, data);
    return result.data;
  } catch (error) {
    console.log(error, "ERROR WHILE UPDATING GUEST DATA");
  }
}