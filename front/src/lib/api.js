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
