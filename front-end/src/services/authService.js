import  api  from "./api.js";

export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  const { token } = response.data;
  if (token) localStorage.setItem("Token", token);
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("Token");
};