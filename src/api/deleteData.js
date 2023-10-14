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
    console.log(error, "ERROR DELETING GUEST DATA");
  }
);

export const deleteGuestData = async (id) => {
  try {
    const result = await instance.get(`/guestbook/deleteEntry/${id}`);
    return result.data;
  } catch (error) {
    console.log(error, "ERROR WHILE DELETING GUEST DATA");
  }
};
