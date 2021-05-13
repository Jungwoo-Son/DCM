import { useState } from "react";
import { useHistory } from "react-router";
import { register } from "../../../lib/api";
import Register from "../../component/register/Register";

const RegisterContainer = () => {
  const [userData, setUserData] = useState({
    id: "",
    pw: "",
    username: "",
    contact: "",
  });
  const history = useHistory();

  const setUserDataByEvent = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterBtnClick = async (e) => {
    try {
      await register(userData);
      history.goBack();
    } catch (e) {
      alert("네트워크 확인해");
    }
  };
  console.log("ppp", process.env);
  return (
    <Register
      userData={userData}
      setUserData={setUserDataByEvent}
      onRegisterBtnClick={handleRegisterBtnClick}
    />
  );
};

export default RegisterContainer;
