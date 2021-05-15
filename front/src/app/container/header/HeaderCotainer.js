import Header from "../../component/header/Header";
import { getUser } from "../../../lib/api";
import { useEffect, useState } from "react";
import LoginedHeader from "../../component/header/LoginedHeader";

const HeaderContainer = () => {
  const [user, setUser] = useState({
    id: localStorage.getItem("userId"),
  });

  useEffect(
    () =>
      (async () => {
        if (user.id) {
          const userAPIData = await getUser(user.id);
          setUser({
            id: userAPIData.id,
            name: userAPIData.name,
            contact: userAPIData.contact,
          });
        }
      })(),
    [user.id]
  );

  if (user.id) {
    return <LoginedHeader linkToMain="/" username={user.name} />;
  }
  return <Header linkToMain="/" linkToLogin="/login" linkToSignUp="signup" />;
};

export default HeaderContainer;
