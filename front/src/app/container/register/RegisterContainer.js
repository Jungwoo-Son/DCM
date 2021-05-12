import { useState } from "react";
import Register from "../../component/register/Register";

const RegisterContainer = () => {
  const [userData, setUserData] = useState({
    id: "",
    pw: "",
    username: "",
    contact: "",
  });

  const setUserDataByEvent = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return <Register userData={userData} setUserData={setUserDataByEvent} />;
};

export default RegisterContainer;
