import { useState } from "react";
import Login from "../../component/login/Login";

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
  console.log(userData);
  return <Login userData={userData} setUserData={setUserDataByEvent} />;
};

export default LoginContainer;
