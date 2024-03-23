import axios from "axios";
import { Report } from "notiflix/build/notiflix-report-aio";

axios.defaults.baseURL = "https://kapusta-backend-827563b0830f.herokuapp.com/";
axios.defaults.validateStatus();

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMTEyOTg1MiwiZXhwIjoxNzExNzM0NjUyfQ.zLvIAbLh2g_1QLURUuUTTi4P-z9NHqS1htU7OF38fOQ";

export const registerAPI = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/register", user);
    return data;
  } catch (error) {
    if (error.response.status === 409) {
      Report.failure(`User ${user.email} is existing`);
    }
  }
};

export const loginAPI = async (user) => {
  const { data } = await axios.post("/api/auth/login", user);
  return data;
};

export const logoutAPI = async () => {
  const { data } = await axios.post("api/auth/logout");
  return data;
};

export const googleLoginAPI = async () => {
  const response = await axios.get("/auth/google", {
    headers: {
      accept: "*/*",
    },
  });
  console.log("response", response);
  return response;
};

export const fullUserInfoAPI = async () => {
  const { data } = await axios.get("api/auth/current");
  return data;
};

export const setAuthHeader = () => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};
