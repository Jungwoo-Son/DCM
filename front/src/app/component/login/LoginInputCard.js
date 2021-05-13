import InputUserDataPair from "./InputUserDataPair";
import * as S from "./style";
const LoginInputCard = () => {
  return (
    <S.LoginInputCard>
      <S.InputCardTitle>로그인</S.InputCardTitle>
      <S.InputsWrapper>
        <InputUserDataPair name="id" title="ID" />
        <InputUserDataPair name="pw" title="PW" />
      </S.InputsWrapper>
      <S.LoginBtn>로그인</S.LoginBtn>
    </S.LoginInputCard>
  );
};

export default LoginInputCard;
