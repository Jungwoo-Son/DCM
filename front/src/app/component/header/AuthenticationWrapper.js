import { Link } from "react-router-dom";
import * as S from "./style";
const AuthenticationWrapper = ({ linkToLogin, linkToSignUp }) => {
  return (
    <S.AuthenticationWrapper>
      <Link to={linkToLogin}>
        <S.Login>로그인</S.Login>
      </Link>
      <S.Divider />
      <Link to={linkToSignUp}>
        <S.SingUp>회원가입</S.SingUp>
      </Link>
    </S.AuthenticationWrapper>
  );
};

export default AuthenticationWrapper;
