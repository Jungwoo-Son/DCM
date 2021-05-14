import { useState } from "react";
import Login from "../../component/login/Login";
import { login } from "../../../lib/api";
import { useHistory } from "react-router";

const LoginContainer = () => {
  const [userData, setUserData] = useState({
    id: "",
    pw: "",
  });

  const setUserDataByEvent = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const handleLoginBtnClick = async (e) => {
    try {
      const accessToken = await login(userData.id, userData.pw);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userData.id);
      history.goBack();
    } catch (e) {
      alert("id 혹은 pw가 올바르지 않습니다.");
    }
  };

  return (
    <Login
      userData={userData}
      setUserData={setUserDataByEvent}
      onLoginBtnClick={handleLoginBtnClick}
    />
  );
};

export default LoginContainer;
