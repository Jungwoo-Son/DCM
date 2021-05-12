import * as S from "./style";
const AuthenticationWrapper = () => {
  return (
    <S.AuthenticationWrapper>
      <S.Login>로그인</S.Login>
      <S.Divider />
      <S.SingUp>회원가입</S.SingUp>
    </S.AuthenticationWrapper>
  );
};

export default AuthenticationWrapper;
