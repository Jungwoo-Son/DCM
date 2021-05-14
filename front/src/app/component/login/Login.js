import LoginInputCard from "./LoginInputCard";
import * as S from "./style";

const Login = ({ userData, setUserData, onLoginBtnClick }) => {
  return (
    <S.LoginContent>
      <LoginInputCard
        userData={userData}
        setUserData={setUserData}
        onLoginBtnClick={onLoginBtnClick}
      />
    </S.LoginContent>
  );
};

export default Login;
