import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("accessToken"),
  },
});

export const register = async (userData) => {
  await api.post("/register", {
    id: userData.id,
    pw: userData.pw,
    name: userData.username,
    contact: userData.contact,
  });
};

export const login = async (id, pw) => {
  const { data } = await api.post("/login", {
    id,
    pw,
  });

  return data.access_token;
};

export const getUser = async (userId) => {
  const { data } = await api.get(`/users/${userId}`);
  return data;
};

export const getProjectsOfUser = async (userId) => {
  const { data } = await api.get(`/users/${userId}/projects`);
  return data;
};
